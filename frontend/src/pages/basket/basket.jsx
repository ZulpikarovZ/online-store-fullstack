import styled from 'styled-components';
import { Delivery, Error, Order, PrivateContent } from '../../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBasketAsync } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import { selecUserBasket } from '../../redux/selectors';
import { ERROR, ROLE } from '../../constants';

const BasketContainer = ({ className }) => {
	// eslint-disable-next-line
	const [total, setTotal] = useState(0);
	const [error, setError] = useState(null);
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
		dispatch(getUserBasketAsync(params.id)).then((res) => setError(res.error));
	}, [dispatch, params.id]);

	if (error) {
		return <Error error={ERROR.BASKET_NOT_FOUND} />;
	}

	return (
		<PrivateContent access={[ROLE.USER, ROLE.ADMIN]}>
			<div className={className}>
				<h2>Оформление заказа</h2>
				<div className="order">
					<Order basket={basket} total={total} />
					<Delivery total={total} />
				</div>
			</div>
		</PrivateContent>
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
