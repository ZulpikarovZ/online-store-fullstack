import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { ROLE } from '../../constants';
import { logout } from '../../redux/actions';

const UserPanelContainer = ({ className }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
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
					<span className="login">{user.login}</span>
					<Icon
						className="logout"
						id="fa-sign-out"
						margin="0 0 0 10px"
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
			<Link to="/basket" className="icon">
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
			& span,
			& .logout {
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
	}

	& .logout:hover {
		color: #4e7df1;
		transition: all 0.3s ease-out;
	}
`;
