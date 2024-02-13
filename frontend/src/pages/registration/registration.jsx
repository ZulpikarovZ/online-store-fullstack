import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions';
import { selectUser } from '../../redux/selectors';
import { ROLE } from '../../constants/role';
import { AuthFormError, Button, Input } from '../../components';
import { request } from '../../utils';
import { useResetForm } from '../../hooks';

const registerFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин. Допускаются только буквы и цифры')
		.matches(/^\w+$/, 'Неверный логин')
		.min(3, 'Некорректный логин. Минимум 3 символа')
		.max(15, 'Некорректный логин. Максимум 15 символов'),
	email: yup
		.string()
		.required('Заполните почту')
		.email('Почта введена неверно')
		.min(9, 'Некорректная почта. Минимум 10 символов')
		.max(30, 'Некорректный почта. Максимум 30 символов'),
	password: yup
		.string()
		.required('Заполните пароль. Допускаются буквы, цифры и знаки # %')
		.matches(/^[\w#%]+$/, 'Неверный пароль')
		.min(6, 'Некорректный пароль. Минимум 6 символов')
		.max(30, 'Некорректный пароль. Максимум 30 символов'),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Повтор пароля не совпадает'),
});

const RegistrationContainer = ({ className }) => {
	const [serverError, setServerError] = useState('');
	const { roleId } = useSelector(selectUser);
	const dispatch = useDispatch();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			email: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(registerFormSchema),
	});

	useResetForm(reset);

	const onSubmit = ({ login, email, password }) => {
		request('/register', 'POST', { login, email, password }).then(
			({ error, user }) => {
				if (error) {
					setServerError(`Ошибка запроса: ${error}`);
					return;
				}
				dispatch(setUser(user));
				sessionStorage.setItem('userData', JSON.stringify(user));
			},
		);
	};

	const formError =
		errors?.login?.message ||
		errors?.email?.message ||
		errors?.password?.message ||
		errors.passcheck?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<h2>Регистрация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="email"
					placeholder="Email..."
					{...register('email', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					autoComplete="on"
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Проверка пароля..."
					autoComplete="on"
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<Button type="submit" color="#f6a701" disabled={!!formError}>
					Регистрация
				</Button>
				<div className="text">
					Уже регистрировались?&nbsp;
					<Link to="/login">Вход</Link>
				</div>
			</form>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& form {
		display: flex;
		flex-direction: column;
		width: 500px;
		padding: 30px;
		border: 1px solid #eee;
		border-radius: 6px;
		margin-bottom: 20px;

		& .text {
			color: gray;
			font-size: 13px;
			margin-top: 25px;
			text-align: center;

			& a {
				color: #4e7df1;
				text-decoration: underline;
			}
		}
	}
`;
