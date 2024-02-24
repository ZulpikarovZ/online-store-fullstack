import styled from 'styled-components';
import { Logo } from '../logo/logo';
import { UserPanel } from '../user-panel/user-panel';

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<div className="wrap">
				<Logo />
				<h2>Здесь могла быть ваша реклама.</h2>
				<UserPanel />
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	background-color: #e3e3e3;

	& h2 {
		color: #f6a701;
	}

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
