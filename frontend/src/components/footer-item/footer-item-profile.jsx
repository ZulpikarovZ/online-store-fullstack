import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterItemProfileContainer = ({ className }) => {
	return (
		<div className={className}>
			<h3>ЛИЧНЫЙ КАБИНЕТ</h3>
			<ul>
				<li>
					<Link to="/profile">Мой профиль</Link>
				</li>
				<li>
					<Link to="/basket">Мои заказы</Link>
				</li>
				<li>
					<Link to="/favorites">Мое избранное</Link>
				</li>
			</ul>
		</div>
	);
};

export const FooterItemProfile = styled(FooterItemProfileContainer)`
	width: 25%;
	padding: 40px;
	font-size: 13px;
`;
