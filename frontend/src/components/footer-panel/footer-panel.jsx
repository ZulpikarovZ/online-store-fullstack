import styled from 'styled-components';
import { FooterItemDesc } from '../footer-item/footer-item-desc';
import { FooterItemCompany } from '../footer-item/footer-item-company';
import { FooterItemProfile } from '../footer-item/footer-item-profile';
import { FooterItemContacts } from '../footer-item/footer-item-contacts';

const FooterPanelContainer = ({ className }) => {
	return (
		<div className={className}>
			<FooterItemDesc />
			<FooterItemCompany />
			<FooterItemProfile />
			<FooterItemContacts />
		</div>
	);
};

export const FooterPanel = styled(FooterPanelContainer)`
	width: 100%;
	display: flex;
	font-size: 12px;

	& h3 {
		font-weight: 500;
		margin-bottom: 20px;
	}

	& li {
		margin-top: 15px;
	}
`;
