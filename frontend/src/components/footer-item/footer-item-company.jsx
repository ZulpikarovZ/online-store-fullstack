import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterItemCompanyContainer = ({ className }) => {
	return (
		<div className={className}>
			<h3>КОМПАНИЯ</h3>
			<ul>
				<li>
					<Link to="/about-us">О компании</Link>
				</li>
				<li>
					<Link to="#">Оплата</Link>
				</li>
				<li>
					<Link to="#">Доставка</Link>
				</li>
				<li>
					<Link to="#">Возврат</Link>
				</li>
				<li>
					<Link to="#">Контакты</Link>
				</li>
			</ul>
		</div>
	);
};

export const FooterItemCompany = styled(FooterItemCompanyContainer)`
	width: 25%;
	padding: 40px;
	font-size: 13px;
`;
