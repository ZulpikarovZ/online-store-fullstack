import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCategoriesAsync } from '../../redux/actions';
import { selectCategories } from '../../redux/selectors';

const CategoriesContainer = ({ className, setSelectedCategory }) => {
	const [activeCategory, setActiveCategory] = useState('all');
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);

	useEffect(() => {
		dispatch(getCategoriesAsync());
	}, [dispatch]);

	const onSetCategory = (id, index) => {
		setActiveCategory(index);
		setSelectedCategory(id);
	};

	const onResetCategory = () => {
		setActiveCategory('all');
		setSelectedCategory('');
	};

	return (
		<div className={className}>
			<h2>Категории:</h2>
			<ul>
				<li
					className={activeCategory === 'all' ? 'active' : ''}
					onClick={() => onResetCategory('all', '')}
				>
					Все товары
				</li>
				{categories.map((category, index) => (
					<li
						key={category.id}
						className={activeCategory === index ? 'active' : ''}
						onClick={() => onSetCategory(category.id, index)}
					>
						{category.name}
					</li>
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

		& .active {
			color: #f6a701;
			font-weight: 500;
		}
	}
`;
