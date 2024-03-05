import styled from 'styled-components';
import { Delivery, Order } from '../../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBasketAsync } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { selecUserBasket } from '../../redux/selectors';

const BasketContainer = ({ className }) => {
	// eslint-disable-next-line
	const [total, setTotal] = useState(0);
	const dispatch = useDispatch();
	const params = useParams();
	const basket = useSelector(selecUserBasket);

	useEffect(() => {
		let summ = basket?.reduce(
			(total, { quantityInBasket, price }) => quantityInBasket * price + total,
			0,
		);

		setTotal(summ);
	}, [basket]);

	useEffect(() => {
		dispatch(getUserBasketAsync(params.id));
	}, [dispatch, params.id]);

	return (
		<div className={className}>
			<h2>Оформление заказа</h2>
			<div className="order">
				<Order basket={basket} total={total} />
				<Delivery total={total} />
			</div>
		</div>
	);
};

export const Basket = styled(BasketContainer)`
	width: 1420px;

	& h2 {
		margin-top: 0;
	}

	& .order {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
	}
`;
