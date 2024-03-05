import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const Error = ({ error }) =>
	error && (
		<Div>
			<h2>Ошибка</h2>
			<div>{error}</div>
		</Div>
	);
