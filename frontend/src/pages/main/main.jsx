import styled from 'styled-components';
import { Categories, ProductsList } from '../../components';

const MainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Categories />
			<ProductsList />
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
`;
