import styled from 'styled-components';

const ProductsTableContainer = ({ className }) => {
	return (
		<div className={className}>
			<table>
				<thead className="outline">
					<tr>
						<th>id</th>
						<th>Наименование</th>
						<th>Категория</th>
						<th>Стоимость</th>
						<th>Количество</th>
						<th>Фото</th>
						<th>Действия</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>lorem</td>
						<td>ipsuum</td>
						<td>Стоимостьтоимость</td>
						<td>Кол-во</td>
						<td>Фото</td>
						<td>Действия</td>
					</tr>
					<tr>
						<td>2</td>
						<td>lorem</td>
						<td>fdfd</td>
						<td>fdfd</td>
						<td>fdfd-во</td>
						<td>frfsdfsdf</td>
						<td>gdfgdfgdf</td>
					</tr>
					<tr>
						<td>3</td>
						<td>fsdfsdfds</td>
						<td>ipsuum</td>
						<td>dsfdsfdsfsd</td>
						<td>Кол-во</td>
						<td>Фото</td>
						<td>fdsfsdfd</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export const ProductsTable = styled(ProductsTableContainer)`
	& table {
		text-align: center;

		& .outline {
			outline: 2px solid #f6a701;
			border-radius: 5px;
			padding: 30px;
		}

		& th {
			font-weight: 500;
		}

		& th,
		& td {
			padding: 10px 30px;
		}
	}
`;
