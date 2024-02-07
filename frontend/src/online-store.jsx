import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, Modal } from './components';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	min-height: 100%;
	width: 1000px;
	background-color: #fff;
	margin: auto;
`;

const Page = styled.div`
	padding: 120px 0 0 0;
`;

export const OnlineStore = () => {
	return (
		<AppContainer>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница с товаром</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/product" element={<div>Добавление товара</div>} />
					<Route path="/product/:id" element={<div>Карточка товара</div>} />
					<Route path="/product/:id/edit" element={<div>Изменение товара</div>} />
					<Route path="/basket/:id" element={<div>Корзина</div>} />
					<Route path="/favorites/:id" element={<div>Избранное</div>} />
					<Route path="*" element={<div>Страница не найдена</div>} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppContainer>
	);
};
