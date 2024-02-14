import styled from 'styled-components';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { useEffect } from 'react';
import { CategoryOption } from '../category-option/category-option';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync } from '../../redux/actions';
import { selectCategory } from '../../redux/selectors';

const AddProductFormContainer = ({ className }) => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategory);

	useEffect(() => {
		dispatch(getCategoriesAsync());
	}, [dispatch]);

	return (
		<div className={className}>
			<div className="outline">
				<div>Добавить товар:</div>
				<Input placeholder="Введите наименование..." />
				<select>
					{categories.map((category) => (
						<CategoryOption key={category.id} category={category} />
					))}
				</select>
				<Input placeholder="Введите стоимость..." />
				<Input placeholder="Введите количество..." />
				<Input placeholder="Введите URL фото..." />
				<Button>Добавить </Button>
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
			color: gray;

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
