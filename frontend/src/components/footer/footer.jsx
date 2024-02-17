import styled from 'styled-components';
import { FooterPanel } from '../footer-panel/footer-panel';

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<div className="wrap">
				<FooterPanel />
				<div className="footer-copy">© 2024 InSale. Все права защищены</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	background-color: #e3e3e3;

	& .wrap {
		width: 1480px;
		margin: 0 auto;

		& .footer-copy {
			font-size: 12px;
			padding: 30px 0;
			text-align: center;
			border-top: 1px solid #222;
		}
	}
`;
