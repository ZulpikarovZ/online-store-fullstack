import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectProducts } from '../../redux/selectors';
import { setProducts } from '../../redux/actions';
import { useEffect } from 'react';
import { ProductsListItem } from '../products-list-item/products-list-item';
import { request } from '../../utils';
import { PAGINATION_LIMIT } from '../../constants';

const ProductsListContainer = ({
	className,
	shouldSearch,
	page,
	searchPhrase,
	setLastPage,
	selectedCategory,
	sort,
}) => {
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	useEffect(() => {
		request(
			`/productss?search=${searchPhrase}&limit=${PAGINATION_LIMIT}&page=${page}&category=${selectedCategory}&sort=${sort}`,
		).then(({ data: { serverProducts, lastPage } }) => {
			dispatch(setProducts(serverProducts));
			setLastPage(lastPage);
		});
		// eslint-disable-next-line
	}, [dispatch, shouldSearch, page, selectedCategory, sort]);

	return (
		<ul className={className}>
			{products.length
				? products.map((product) => (
						<ProductsListItem key={product.id} product={product} />
					))
				: 'Товара нет.'}
		</ul>
	);
};

export const ProductsList = styled(ProductsListContainer)`
	width: 1140px;
	display: flex;
	flex-wrap: wrap;
	margin: 0;
`;
