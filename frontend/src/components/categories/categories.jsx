import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCategoriesAsync } from '../../redux/actions';
import { selectCategories } from '../../redux/selectors';

const CategoriesContainer = ({ className }) => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);

	useEffect(() => {
		dispatch(getCategoriesAsync());
	}, [dispatch]);

	return (
		<div className={className}>
			<h2>Категории:</h2>
			<ul>
				{categories.map((category) => (
					<li key={category.id}>{category.name}</li>
				))}
			</ul>
		</div>
	);
};

export const Categories = styled(CategoriesContainer)`
	width: 250px;
	height: 100%;
	margin-right: 30px;
	border: 1px solid #eee;
	border-radius: 5px;

	& h2 {
		background: #f7f7f7;
		margin: 0;
		padding: 20px;
	}

	& ul {
		margin: 0;

		& li:first-child {
			border-top: 1px solid #eee;
		}

		& li {
			padding: 10px;
			cursor: pointer;
			border-radius: 5px;
			border-bottom: 1px solid #eee;

			&:hover {
				background: #f7f7f7;
			}
		}
	}
`;
