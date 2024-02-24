import styled from 'styled-components';
import { Button } from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { selectApp, selectCategories } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { CategoryOption } from '../category-option/category-option';
import { Input } from '../input/input';
import { editProductAsync, setModalClose } from '../../redux/actions';

const ModalContainer = ({ className, productData }) => {
	const [product, setproduct] = useState({ ...productData });
	const { isModalOpen } = useSelector(selectApp);
	const categories = useSelector(selectCategories);
	const dispatch = useDispatch();

	useEffect(() => {
		setproduct({ ...productData });
	}, [productData]);

	if (!isModalOpen) {
		return;
	}

	const onProductEdit = () => {
		dispatch(editProductAsync(product.id, product));
		dispatch(setModalClose());
	};

	return (
		<div className={className}>
			<div className="overlay">
				<div className="box">
					<h3>Редактирование товара</h3>
					<select
						name="category"
						value={product.categoryId?.name}
						onChange={({ target }) => {
							const item = categories.find(
								(el) => el.name === target.value,
							);
							setproduct({ ...product, categoryId: item?.id });
						}}
					>
						<option>Выберите категорию</option>;
						{categories.map((category) => (
							<CategoryOption key={category.id} category={category} />
						))}
					</select>
					<Input
						type="text"
						name="name"
						value={product.name || ''}
						onChange={({ target }) =>
							setproduct({ ...product, name: target.value })
						}
						placeholder="Введите наименование..."
					/>
					<Input
						type="number"
						name="price"
						value={product.price || ''}
						onChange={({ target }) =>
							setproduct({ ...product, price: target.value })
						}
						placeholder="Введите стоимость..."
					/>
					<Input
						type="number"
						name="quantity"
						value={product.quantity || ''}
						onChange={({ target }) =>
							setproduct({ ...product, quantity: target.value })
						}
						placeholder="Введите количество..."
					/>
					<Input
						type="text"
						name="imageUrl"
						value={product.imageUrl || ''}
						onChange={({ target }) =>
							setproduct({ ...product, imageUrl: target.value })
						}
						placeholder="Введите URL фото..."
					/>
					<div className="buttons">
						<Button onClick={() => onProductEdit()}>Сохранить</Button>
						<Button onClick={() => dispatch(setModalClose())}>Отмена</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	& .overlay {
		background: rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;

		& .box {
			width: 400px;
			background: #fff;
			text-align: center;
			padding: 15px;
			border-radius: 10px;

			& > div,
			& > select,
			& > Input {
				margin-bottom: 20px;
			}

			& select {
				width: 100%;
				height: 48px;
				padding: 10px 15px;
				font-size: 14px;
				background-color: #f6f6f6;
				border: 1px solid #eee;
				border-radius: 5px;
				outline: none;

				&:focus {
					background: #fff;
					border-color: #ccc;
				}

				&:hover {
					border-color: #ccc;
				}
			}
		}

		& .buttons {
			display: flex;

			& Button {
				margin: 0 5px;
			}
		}
	}

	h3 {
		margin-top: 0;
		font-weight: 500;
	}
`;
