import styled from 'styled-components';
import { Input } from '../input/input';
import { Icon } from '../icon/icon';

const SearchContainer = ({ className }) => {
	return (
		<div className={className}>
			<Input width="700px" placeholder="Поиск..." />
			<Icon className="icon" id="fa-search" inactive="true" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 700px;

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
