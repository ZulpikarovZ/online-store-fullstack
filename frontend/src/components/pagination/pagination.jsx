import styled from 'styled-components';
import { Button } from '../button/button';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 20px;
	padding: 0 35px;
	position: absolute;
	left: calc(50% - 330px);
	bottom: 430px;
	width: 740px;

	& Button {
		margin: 0 5px;
	}

	& .current-page {
		width: -webkit-fill-available;
		height: 44px;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		outline: 1px solid #e3e3e3;
	}
`;
