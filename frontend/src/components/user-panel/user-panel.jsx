import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { ROLE } from '../../constants';
import { logout } from '../../redux/actions';

const UserPanelContainer = ({ className }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
		navigate('/');
	};

	return (
		<div className={className}>
			{user.roleId === ROLE.GUEST ? (
				<Link to="/login" className="icon">
					<Icon id="fa-user-circle" />
					<span>Авторизация</span>
				</Link>
			) : (
				<div className="login-container">
					<Link to="/profile">
						<span className="login" title="profile">
							{user.login}
						</span>
					</Link>
					<Icon
						className="logout"
						id="fa-sign-out"
						margin="0 0 0 20px"
						onClick={onLogout}
						size="30px"
						title="logout"
					/>
				</div>
			)}
			<Link to="/favorites" className="icon">
				<Icon id="fa-heart-o" />
				<span>Избранное</span>
			</Link>
			<Link
				to={user.roleId === 2 ? `/login` : `/basket/${user.id}`}
				className="icon"
			>
				<Icon id="fa-shopping-cart" />
				<span>Корзина</span>
			</Link>
		</div>
	);
};

export const UserPanel = styled(UserPanelContainer)`
	display: flex;
	text-align: center;
	font-size: 12px;

	& .icon {
		margin-left: 30px;

		&:hover {
			& div,
			& span {
				color: #4e7df1;
				transition: all 0.3s ease-out;
			}

			&:active {
				opacity: 0.8;
			}
		}
	}

	& .icon:first-child {
		margin-left: 0;
	}

	& .login-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	& .login {
		font-weight: 500;
		font-size: 24px;
		outline: 1px solid gray;
		border-radius: 5px;
		padding: 5px;
	}

	& .logout:hover,
	& .login:hover {
		color: #4e7df1;
		transition: all 0.3s ease-out;
	}
`;
