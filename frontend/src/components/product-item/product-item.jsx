import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { useDispatch } from 'react-redux';
import { removeProductAsync, setModalOpen } from '../../redux/actions';

const ProductItemContainer = ({ className, product, idx, setProductData }) => {
	const dispatch = useDispatch();

	const onEditProduct = () => {
		setProductData(product);
		dispatch(setModalOpen());
	};

	const onRemoveProduct = () => {
		dispatch(removeProductAsync(product.id));
	};

	return (
		<>
			<tr className={className}>
				<td>{idx}</td>
				<td>{product.categoryId?.name}</td>
				<td className="product-name">{product.name}</td>
				<td>{product.price}</td>
				<td>{product.quantity}</td>
				<td>
					<div className="image-url">{product.imageUrl}</div>
				</td>
				<td className="action">
					<Icon
						className="icon"
						id="fa-pencil"
						onClick={() => onEditProduct()}
					/>
					<Icon
						className="icon"
						id="fa-times"
						onClick={() => onRemoveProduct()}
					/>
				</td>
			</tr>
		</>
	);
};

export const ProductItem = styled(ProductItemContainer)`
	& .image-url {
		width: 100px;
		white-space: nowrap; /* Текст не переносится */
		overflow: hidden; /* Обрезаем всё за пределами блока */
		text-overflow: ellipsis; /* Добавляем многоточие */
	}

	& td {
		font-size: 14px;
		background-color: #f6f6f6;
		border: 1px solid #eee;
		border-radius: 5px;
		outline: none;

		& .product-name {
			max-width: 250px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&:focus {
			background: #fff;
			border-color: #ccc;
		}

		&:hover {
			border-color: #ccc;
		}
	}

	& .product-name {
		max-width: 250px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	& .action {
		display: flex;
		justify-content: space-evenly;
		padding: 5px;

		& .icon {
			color: #f6a701;
			transition: all 0.3s ease-out;

			&:hover {
				opacity: 0.5;
			}
		}
	}
`;
