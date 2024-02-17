import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectProducts } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { getProductsAsync } from '../../redux/actions';
import { ProductItem } from '../product-item/product-item';
import { Modal } from '../modal/modal';

const ProductsTableContainer = ({ className }) => {
	const [productData, setProductData] = useState({});
	const products = useSelector(selectProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductsAsync());
	}, [dispatch]);

	return (
		<div className={className}>
			<table>
				<thead className="outline">
					<tr>
						<th>№</th>
						<th>Категория</th>
						<th>Наименование</th>
						<th>Стоимость</th>
						<th>Количество</th>
						<th>URL</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, idx) => (
						<ProductItem
							key={idx}
							product={product}
							idx={++idx}
							setProductData={setProductData}
						/>
					))}
				</tbody>
			</table>
			<Modal productData={productData} />
		</div>
	);
};

export const ProductsTable = styled(ProductsTableContainer)`
	& table {
		text-align: center;
		margin-top: -10px;
		border-spacing: 10px;

		& .outline {
			outline: 2px solid #f6a701;
			border-radius: 5px;
			padding: 30px;
		}

		& th {
			font-weight: 500;
		}

		& th,
		& td {
			padding: 10px 20px;
		}
	}
`;
