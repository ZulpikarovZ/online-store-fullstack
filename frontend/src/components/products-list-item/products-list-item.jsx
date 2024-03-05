import styled from 'styled-components';
import { Button } from '../button/button';
import { Link } from 'react-router-dom';
import { Icon } from '../icon/icon';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToBasketAsync } from '../../redux/actions';
import { selectUser } from '../../redux/selectors';

const ProductsListItemContainer = ({ className, product }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const quantityColor = product.quantity > 0 ? 'green' : 'red';

	const onAddToBasket = () => {
		if (!user.login) {
			alert('Сначала нужно зарегестрироваться.');
			return;
		}

		dispatch(addProductToBasketAsync(user.id, product.id));
		alert('Товар добавлен в корзину.');
	};

	return (
		<li className={className}>
			<div className="image-wrap">
				<Link to={`/product/${product.id}`}>
					<img src={product.imageUrl} alt="" />
				</Link>
			</div>
			<span className="name">{product.name}</span>
			<span className="check">
				<Icon
					id={quantityColor === 'green' ? 'fa-check-circle' : 'fa-frown-o'}
					className={quantityColor}
					inactive="true"
				/>
				<span className={quantityColor}>
					&nbsp;В наличии {product.quantity}шт.
				</span>
			</span>
			<div className="price">{product.price}₽</div>
			<Button disabled={quantityColor === 'red'} onClick={onAddToBasket}>
				В корзину
			</Button>
			<Icon id="fa-heart-o" className="like" size="18px" />
		</li>
	);
};

export const ProductsListItem = styled(ProductsListItemContainer)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 262.5px;
	border: 1px solid #ececec;
	border-radius: 5px;
	margin: 0 30px 30px 0;
	padding: 15px;
	transition: box-shadow 0.2s ease-out;

	&:nth-child(4n) {
		margin-right: 0;
	}

	&:hover {
		box-shadow: 0 5px 20px rgba(61, 61, 61, 0.1);
	}

	& .image-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 244px;
		text-align: center;
		margin-bottom: 20px;

		& img {
			max-width: 100%;
		}
	}

	& .name {
		font-size: 14px;
		margin-bottom: 20px;
	}

	& .check {
		font-size: 13px;
		display: flex;
		margin-bottom: 20px;

		& .green {
			color: #43c16d;
			font-size: 13px;
		}

		& .red {
			color: #ff3110;
			font-size: 13px;
		}
	}

	& .price {
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 20px;
	}

	& .like {
		display: flex;
		justify-content: center;F
		align-items: center;
		position: absolute;
		right: 15px;
		padding: 5px;
		border-radius: 50%;
		outline: 1px solid #eee;

		&:hover {
			transition: all 0.1s linear;
			outline: 2px solid #f6a701;
		}
	}
`;
