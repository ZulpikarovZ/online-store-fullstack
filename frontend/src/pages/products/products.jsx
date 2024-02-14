import styled from 'styled-components';
import { AddCategoryForm, AddProductForm, ProductsTable } from '../../components';

const ProductsContainer = ({ className }) => {
	return (
		<div className={className}>
			<h2>Admin panel</h2>
			<div className="xxx">
				<div className="left-col">
					<AddCategoryForm />
					<AddProductForm />
				</div>
				<div className="right-col">
					<ProductsTable />
				</div>
			</div>
		</div>
	);
};

export const Products = styled(ProductsContainer)`
	h2 {
		text-align: center;
	}

	& .xxx {
		width: 1480px;
		display: flex;
		justify-content: space-between;
		margin: auto;
		padding: 0 30px 80px 30px;
	}

	& .left-col {
		width: 25%;
	}

	.right-col {
		// width: calc(75% - 40px);
	}
`;
