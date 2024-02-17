import styled from 'styled-components';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { useEffect, useState } from 'react';
import { CategoryOption } from '../category-option/category-option';
import { useDispatch, useSelector } from 'react-redux';
import { addProductAsync, getCategoriesAsync } from '../../redux/actions';
import { selectCategories } from '../../redux/selectors';

const AddProductFormContainer = ({ className }) => {
	const initState = { categoryId: '', name: '', price: '', quantity: '', imageUrl: '' };
	const [newProduct, setNewProduct] = useState({ ...initState });
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);

	useEffect(() => {
		dispatch(getCategoriesAsync());
	}, [dispatch]);

	const submitHandler = () => {
		const fieldsAreFilled =
			newProduct.categoryId &&
			newProduct.name &&
			newProduct.price &&
			newProduct.quantity &&
			newProduct.imageUrl;

		if (fieldsAreFilled) {
			dispatch(addProductAsync({ ...newProduct }));
			setNewProduct({ ...initState });
		} else {
			alert('Заполните все поля формы.');
		}
	};

	return (
		<div className={className}>
			<div className="outline">
				<div>Добавить товар:</div>
				<select
					name="category"
					onChange={({ target }) => {
						const item = categories.find((el) => el.name === target.value);
						setNewProduct({ ...newProduct, categoryId: item.id });
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
					value={newProduct.name}
					onChange={({ target }) =>
						setNewProduct({ ...newProduct, name: target.value })
					}
					placeholder="Введите наименование..."
				/>
				<Input
					type="number"
					name="price"
					value={newProduct.price}
					onChange={({ target }) =>
						setNewProduct({ ...newProduct, price: target.value })
					}
					placeholder="Введите стоимость..."
				/>
				<Input
					type="number"
					name="quantity"
					value={newProduct.quantity}
					onChange={({ target }) =>
						setNewProduct({ ...newProduct, quantity: target.value })
					}
					placeholder="Введите количество..."
				/>
				<Input
					type="text"
					name="imageUrl"
					value={newProduct.imageUrl}
					onChange={({ target }) =>
						setNewProduct({ ...newProduct, imageUrl: target.value })
					}
					placeholder="Введите URL фото..."
				/>
				<Button onClick={submitHandler}>Добавить</Button>
			</div>
		</div>
	);
};

export const AddProductForm = styled(AddProductFormContainer)`
	& .outline {
		outline: 2px solid #f6a701;
		border-radius: 5px;
		padding: 30px;

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
`;
