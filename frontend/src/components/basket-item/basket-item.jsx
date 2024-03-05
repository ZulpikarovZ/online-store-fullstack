import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../icon/icon';
import { Input } from '../input/input';
import { useDispatch } from 'react-redux';
import {
	removeProductFromBasketAsync,
	setBasketProductQuantity,
} from '../../redux/actions';
import { useEffect, useState } from 'react';

const BasketItemContainer = ({ className, product }) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(setBasketProductQuantity(product?.id, quantity));
	}, [dispatch, quantity, product.id]);

	const onDeleteFromBasket = () => {
		dispatch(removeProductFromBasketAsync(params.id, product.id));
	};

	const decrease = () => {
		if (quantity < 1) {
			setQuantity(1);
			return;
		}

		setQuantity(quantity - 1);
	};

	const increase = () => {
		if (quantity >= product.quantity) {
			setQuantity(product.quantity);
			return;
		}

		setQuantity(quantity + 1);
	};

	const onChangeQuantity = ({ target }) => {
		if (quantity < 1) {
			setQuantity(1);
			return;
		} else if (quantity >= product.quantity) {
			setQuantity(product.quantity);
			return;
		}

		setQuantity(Number(target.value));
	};

	return (
		<div className={className}>
			<img src={product.imageUrl} alt="" />
			<div className="product">
				<Link to={`/product/${product.id}`} className="title">
					{product.name}
				</Link>
				<span className="deleting" onClick={onDeleteFromBasket}>
					<Icon id="fa-trash" size="12px" />
					&nbsp;удалить
				</span>
			</div>
			<div className="quantity">
				{quantity <= 1 ? (
					<span className="minmax">min</span>
				) : (
					<Icon className="sign" id="fa-minus" size="16px" onClick={decrease} />
				)}
				<Input className="field" value={quantity} onChange={onChangeQuantity} />
				{quantity === product.quantity ? (
					<span className="minmax">max</span>
				) : (
					<Icon className="sign" id="fa-plus" size="16px" onClick={increase} />
				)}
			</div>
			<span className="sum">{quantity * product.price}&nbsp;₽</span>
		</div>
	);
};

export const BasketItem = styled(BasketItemContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #efefef;
	padding: 16.6px 0;

	& img {
		width: 33px;
		height: 100%;
		margin-right: 15px;
	}

	& .product {
		display: flex;
		align-items: center;
		width: 350px;
	}

	& .title {
		color: #f6a701;
		text-decoration: underline;
		margin-right: 15px;
	}

	& .deleting {
		display: flex;
		align-items: center;
		font-size: 12px;
		color: #888;
		cursor: pointer;

		& > div {
			color: #888;
		}
	}

	& .quantity {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 135px;

		& .sign {
			color: #c4c4c4;
			text-align: center;

			&:first-child {
				width: 26.74px;
			}

			&:last-child {
				width: 30.66px;
			}
		}

		& .minmax {
			color: #c4c4c4;
		}
	}

	& .field {
		width: 60px;
		margin: 0;
		padding: 4px;
		height: auto;
		font-size: 18px;
		line-height: 20px;
		border: 1px solid #b7b7b7;
		text-align: right;
		background: #fff;
	}

	& .sum {
		width: 110px;
		text-align: right;
		font-weight: 500;
	}
`;
