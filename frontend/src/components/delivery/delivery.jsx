import styled from 'styled-components';
import { Input } from '../input/input';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { Button } from '../button/button';
import { useNavigate } from 'react-router-dom';

const DeliveryContainer = ({ className, total }) => {
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		alert('Заказ успешно подтвержден!');
		navigate('/');
	};

	return (
		<div className={className}>
			<form onSubmit={submitHandler}>
				<h3>Оформление</h3>
				<h4>
					Покупатель:&nbsp;<span>{user.login}</span>
				</h4>
				<div className="wrap">
					<div className="label">Имя</div>
					<Input className="field" type="text" />
				</div>
				<div className="wrap">
					<div className="label">Фамилия</div>
					<Input className="field" type="text" />
				</div>
				<div className="wrap">
					<div className="label">Телефон</div>
					<Input
						className="field"
						type="tel"
						placeholder="+X 111 222-33-44"
						required
					/>
				</div>
				<div className="wrap">
					<div className="label">Email</div>
					<Input className="field" type="mail" />
				</div>
				<h4>Доставка</h4>
				<p>Для расчета стоимости и срока доставки заполните поля со звездочкой</p>
				<div className="wrap">
					<div className="label">
						Страна <span className="star">*</span>
					</div>
					<Input className="field" type="text" required />
				</div>
				<div className="wrap">
					<div className="label">
						Регион <span className="star">*</span>
					</div>
					<Input className="field" type="text" required />
				</div>
				<div className="wrap">
					<div className="label">
						Город <span className="star">*</span>
					</div>
					<Input className="field" type="text" required />
				</div>
				<div className="wrap">
					<div className="label">Улица, дом, квартира</div>
					<Input className="field" type="text" />
				</div>
				<h4 className="pay">Оплата</h4>
				<div className="total">
					<div className="total-left">
						<div className="flex">
							<div>Стоимость товаров</div>
							<div className="sum">{total || 0}&nbsp;₽</div>
						</div>
						<div className="flex">
							<div>Стоимость доставки</div>
							<div className="sum">500&nbsp;₽</div>
						</div>
						<div className="flex total-value">
							<div>Итого</div>
							<div className="total-sum">{(total || 0) + 500}&nbsp;₽</div>
						</div>
					</div>
					<Button className="btn" width="210px" type="submit">
						Подтвердить заказ
					</Button>
				</div>
			</form>
		</div>
	);
};

export const Delivery = styled(DeliveryContainer)`
	width: calc(50% - 20px);
	padding: 20px 20px 40px;
	background: #fff;
	border: 1px solid #eee;
	border-radius: 4px;
	position: relative;
	transition: box-shadow 0.3s ease-out;

	& .pay {
		margin-bottom: 20px;
	}

	& .total-left {
		width: 420px;
	}

	&:hover {
		box-shadow: 0 0.5rem 2rem rgba(22, 28, 45, 0.1);
	}

	h3 {
		font-size: 24px;
		font-weight: normal;
		margin: 0;
	}

	h4 {
		font-size: 20px;
		margin: 40px 0 0 0;
		font-weight: 500;

		& span {
			color: #555;
			font-weight: 400;
		}
	}

	& p {
		font-size: 14px;
		color: #888;
		margin: 20px 0 0 0;
	}

	& .wrap {
		display: inline-block;
		width: 50%;
		padding: 20px 20px 0 0;

		& .label {
			margin-bottom: 6px;
			font-size: 12px;
			color: #888;

			& .star {
				color: #e69900;
			}
		}
	}

	& .field {
		font-size: 13px;
		border-radius: 3px;
		font-size: 12px;
		line-height: normal;
		height: auto;
		margin-bottom: 0;
	}

	& .total {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		color: #888;

		& .sum {
			color: #222;
		}

		& .btn {
			align-self: flex-end;
		}

		& .flex {
			display: flex;
			margin-bottom: 10px;

			& div {
				width: 50%;
			}
		}

		& .total-value {
			color: #000;
			font-weight: 500;
			margin: 15px 0 0 0;

			& div:first-child {
				align-self: end;
			}

			& .total-sum {
				font-size: 24px;
			}
		}
	}
`;
