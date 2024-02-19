import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectProducts } from '../../redux/selectors';
import { getProductsAsync } from '../../redux/actions';
import { useEffect } from 'react';
import { ProductsListItem } from '../products-list-item/products-list-item';

const ProductsListContainer = ({ className }) => {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	useEffect(() => {
		dispatch(getProductsAsync());
	}, [dispatch]);

	return (
		<ul className={className}>
			{products.map((product) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

export const ProductsList = styled(ProductsListContainer)`
	width: 1140px;
	display: flex;
	flex-wrap: wrap;
	margin: 0;
`;
