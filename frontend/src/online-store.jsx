import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header, Modal } from './components';
import { useDispatch } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setUser } from './redux/actions';
import { Products, Authorization, Profile, Registration } from './pages';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	min-height: 100%;
	// width: 1480px;
	width: 100%;
	background-color: #fff;
	margin: auto;
`;

const Page = styled.div`
	// padding: 120px 0 0 0;
`;

export const OnlineStore = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserData = JSON.parse(sessionStorage.getItem('userData'));

		if (!currentUserData) {
			return;
		}

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return (
		<AppContainer>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница с товаром</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product" element={<div>Добавление товара</div>} />
					<Route path="/product/:id" element={<div>Карточка товара</div>} />
					<Route
						path="/product/:id/edit"
						element={<div>Изменение товара</div>}
					/>
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
