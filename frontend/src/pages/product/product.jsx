import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addProductToBasketAsync, getProductAsync } from '../../redux/actions';
import { Button, Comments, Error, Icon } from '../../components';
import { selectUser } from '../../redux/selectors';
import { ERROR } from '../../constants';

const ProductContainer = ({ className }) => {
	const [product, setProduct] = useState({});
	const [error, setError] = useState(null);
	const user = useSelector(selectUser);
	const params = useParams();
	const dispatch = useDispatch();

	const quantityColor = product.quantity > 0 ? 'green' : 'red';

	useEffect(() => {
		dispatch(getProductAsync(params.id)).then((res) => {
			if (res.error) {
				setError(res.error);
				return;
			}
			setProduct(res?.data);
		});
	}, [dispatch, params.id]);

	if (error) {
		return <Error error={ERROR.PRODUCT_NOT_FOUND} />;
	}

	const onAddToBasket = () => {
		if (!user.login) {
			alert('Сначала нужно зарегестрироваться.');
			return;
		}

		dispatch(addProductToBasketAsync(user.id, params.id));
		alert('Товар добавлен в корзину.');
	};

	return (
		<div className={className}>
			<h2>{product.name}</h2>
			<div className="product-row">
				<div className="image">
					<img src={product.imageUrl} alt="" />
				</div>
				<div className="description">
					<h4>Описание:</h4>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
					etiam non quam lacus.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae
					turpis massa sed elementum tempus egestas sed.
					<br />
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
					consequat mauris nunc congue nisi vitae suscipit tellus. Adipiscing
					elit pellentesque habitant morbi tristique.
				</div>
				<div className="buy">
					<span className={quantityColor === 'green' ? 'green' : 'red'}>
						{quantityColor === 'green' ? 'В наличии' : 'Нет в наличии'}
					</span>
					<div className="price">{product.price}₽</div>
					<span>
						<Icon
							id="fa-phone"
							size="16px"
							className="icon"
							inactive={true}
						/>
						<span className="phone">
							Заказ по телефону:&nbsp;
							<a href="tel:+79657777777">+7(965)-777-77-777</a>
						</span>
					</span>
					<Button disabled={quantityColor === 'red'} onClick={onAddToBasket}>
						В корзину
					</Button>
				</div>
			</div>
			<Comments product={product} setProduct={setProduct} />
		</div>
	);
};

export const Product = styled(ProductContainer)`
	width: 1480px;

	& h2 {
		text-align: center;
	}

	& .product-row {
		display: flex;
		margin-bottom: 50px;

		& > div {
			outline: 1px solid #eee;

			&:hover {
				box-shadow: 0 5px 20px rgba(61, 61, 61, 0.1);
			}
		}

		& .image {
			width: 525px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 30px;

			& img {
				height: 466px;
			}
		}

		& .description {
			width: 427.5px;
			padding: 30px;
			color: #808080;

			& h4 {
				color: #222;
				font-weight: 500;
			}
		}

		& .buy {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 427.5px;
			padding: 30px;

			& .green {
				color: #43c16d;
				font-size: 13px;
			}

			& .red {
				color: #ff3110;
				font-size: 13px;
			}

			& .price {
				font-size: 30px;
				font-weight: 500;
				margin: 30px 0;
			}

			& .phone {
				padding-left: 20px;

				& a {
					color: #f6a701;
					text-decoration: underline;
				}
			}

			& .icon {
				position: absolute;
				color: #4e7df1;
			}
		}
	}
`;
