import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { Link } from 'react-router-dom';

const UserPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<Link to="/login" className="icon">
				<Icon id="fa-user-circle" />
				<span>Авторизация</span>
			</Link>
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
`;
