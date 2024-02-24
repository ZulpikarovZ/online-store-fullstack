import styled from 'styled-components';
import { Input } from '../input/input';
import { Icon } from '../icon/icon';

const SearchContainer = ({ className, searchPhrase, onSearch }) => {
	return (
		<div className={className}>
			<Input
				width="700px"
				placeholder="Найти товаров..."
				value={searchPhrase}
				onChange={onSearch}
			/>
			<Icon className="icon" id="fa-search" inactive="true" />
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
`;
