import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BasketItem } from '../basket-item/basket-item';

const OrderContainer = ({ className, basket, total }) => {
	return (
		<div className={className}>
			<h3>Корзина</h3>
			{basket?.length ? (
				<div className="basket-body">
					<div>
						{basket?.map((product, idx) => (
							<BasketItem key={idx} product={product} />
						))}
					</div>
					<div className="total-sum">Итого&nbsp;{total}&nbsp;₽</div>
				</div>
			) : (
				<div className="empty">Корзина пуста!</div>
			)}
			<div className="return">
				<Link to="/">← Вернуться к покупкам</Link>
			</div>
			<div className="basket-footer">
				<div>Заказ можно оформить по телефону!</div>
				<div>
					<a href="tel:+79657777777">+7(965)-777-77-77</a>
				</div>
			</div>
		</div>
	);
};

export const Order = styled(OrderContainer)`
	width: calc(50% - 20px);
	background: #fff;
	border: 1px solid #eee;
	border-radius: 4px;
	position: relative;
	transition: box-shadow 0.3s ease-out;

	& > div {
		border-bottom: 1px solid #eee;
	}

	& .basket-body {
		padding: 20px;
	}

	&:hover {
		box-shadow: 0 0.5rem 2rem rgba(22, 28, 45, 0.1);
	}

	h3 {
		font-size: 24px;
		font-weight: normal;
		padding: 20px;
		margin: 0;
	}

	& .total-sum {
		padding: 30px 0;
		font-size: 18px;
		font-weight: 500;
		text-align: right;
	}

	& .empty {
		text-align: center;
		padding: 40px 0 60px;
	}

	& .return {
		padding: 20px;
		text-align: right;

		& a {
			color: #f6a701;
			transition: all 0.3s ease-out;

			&:hover {
				color: #004aff;
			}
		}
	}

	& .basket-footer {
		padding: 20px;
		background-color: #fafafa;
		text-align: center;
		border-bottom: none;

		& div:first-child {
			color: #777;
			font-size: 15px;
			margin-bottom: 15px;
		}

		& div:last-child {
			color: #222;
			font-size: 17px;
			font-weight: 500;
			margin-bottom: 15px;
		}
	}
`;
