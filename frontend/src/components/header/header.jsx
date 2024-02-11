import styled from 'styled-components';
import { Logo } from '../logo/logo';
import { Search } from '../search/search';
import { UserPanel } from '../user-panel/user-panel';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="wrap">
				<Logo />
				<Search />
				<UserPanel />
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	background-color: #e3e3e3;

	& .wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 1480px;
		height: 130px;
		margin: 0 auto;
		padding: 0 30px;
	}
`;
