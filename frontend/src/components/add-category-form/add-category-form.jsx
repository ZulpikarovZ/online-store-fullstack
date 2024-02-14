import styled from 'styled-components';
import { Input } from '../input/input';
import { Button } from '../button/button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategoryAsync, removeCategoryAsync } from '../../redux/actions';

const AddCategoryFormContainer = ({ className }) => {
	const [categoryName, setCategoryName] = useState('');
	const dispatch = useDispatch();

	const categoryHandler = (asyncAction) => {
		if (!categoryName.trim()) {
			setCategoryName('');
			return;
		}

		dispatch(asyncAction(categoryName));
		setCategoryName('');
	};

	return (
		<div className={className}>
			<div className="outline">
				<div>Добавить категорию:</div>
				<Input
					placeholder="Введите название категории..."
					value={categoryName}
					onChange={({ target }) => setCategoryName(target.value)}
				/>
				<div className="btns">
					<Button onClick={() => categoryHandler(addCategoryAsync)}>
						Добавить
					</Button>
					<Button onClick={() => categoryHandler(removeCategoryAsync)}>
						Удалить
					</Button>
				</div>
			</div>
		</div>
	);
};

export const AddCategoryForm = styled(AddCategoryFormContainer)`
	& .outline {
		outline: 2px solid #f6a701;
		border-radius: 5px;
		padding: 30px;
		margin-bottom: 40px;

		& > div,
		& > select,
		& > Input {
			margin-bottom: 20px;
		}

		& .btns {
			display: flex;

			& Button:first-child {
				margin-right: 10px;
			}
		}
	}
`;
