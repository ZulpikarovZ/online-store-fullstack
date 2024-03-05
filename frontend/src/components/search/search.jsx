import styled from 'styled-components';
import { Input } from '../input/input';
import { Icon } from '../icon/icon';

const SearchContainer = ({ className, searchPhrase, onSearch, sort, setSort }) => {
	const onSortHandler = ({ target }) => {
		if (target.value === 'Сортировка') {
			setSort('');
			return;
		}

		setSort(target.value);
	};

	return (
		<div className={className}>
			<Input
				width="700px"
				placeholder="Найти товар..."
				value={searchPhrase}
				onChange={onSearch}
			/>
			<Icon className="icon" id="fa-search" inactive="true" />
			<select onChange={onSortHandler} value={sort}>
				<option>Сортировка</option>
				<option>Сначала дешовые</option>
				<option>Сначала дорогие</option>
			</select>
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 700px;
	margin: auto;
	margin-bottom: 30px;

	& Input {
		padding-right: 50px;
	}

	& .icon {
		width: 50px;
		color: #ccc;
		position: absolute;
		top: 10px;
		right: -15px;
	}

	& select {
		position: absolute;
		right: -200px;
		// width: 100%;
		height: 48px;
		padding: 10px 15px;
		font-size: 14px;
		background-color: #f6f6f6;
		border: 1px solid #eee;
		border-radius: 5px;
		outline: none;
	}
`;
