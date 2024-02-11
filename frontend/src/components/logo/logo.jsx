import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const LogoContainer = ({ className }) => {
	return (
		<Link to="/" className={className}>
			<img src={logo} alt="" width="200px" />
		</Link>
	);
};

export const Logo = styled(LogoContainer)``;
