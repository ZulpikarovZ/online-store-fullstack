import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectUserId } from '../../redux/selectors';

const FooterItemProfileContainer = ({ className }) => {
	const userId = useSelector(selectUserId);

	return (
		<div className={className}>
			<h3>ЛИЧНЫЙ КАБИНЕТ</h3>
			<ul>
				<li>
					<Link to="/profile">Мой профиль</Link>
				</li>
				<li>
					<Link to={`/basket/${userId}`}>Мои заказы</Link>
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
