import styled from 'styled-components';
import { Categories, Pagination, ProductsList, Search } from '../../components';
import { useMemo, useState } from 'react';
import { debounce } from '../../utils';

const MainContainer = ({ className }) => {
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [shouldSearch, setShouldSearch] = useState(false);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 500), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<Search searchPhrase={searchPhrase} onSearch={onSearch} />
			<div className="content">
				<Categories />
				<ProductsList
					shouldSearch={shouldSearch}
					page={page}
					searchPhrase={searchPhrase}
					setLastPage={setLastPage}
				/>
			</div>
			<Pagination page={page} setPage={setPage} lastPage={lastPage} />
		</div>
	);
};

export const Main = styled(MainContainer)`
	width: 1480px;

	& .content {
		display: flex;
		margin-bottom: 70px;
	}
`;
