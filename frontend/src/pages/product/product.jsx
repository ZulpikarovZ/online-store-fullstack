import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductAsync } from '../../redux/actions';
import { Button, Icon } from '../../components';

const ProductContainer = ({ className }) => {
	const [product, setProduct] = useState({});
	const params = useParams();
	const dispatch = useDispatch();

	const quantityColor = product.quantity > 0 ? 'green' : 'red';

	useEffect(() => {
		dispatch(getProductAsync(params.id)).then((res) => setProduct(res?.data));
	}, [dispatch, params.id]);

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
					<Button disabled={quantityColor === 'red'}>В корзину</Button>
				</div>
			</div>
			<h2>Отзывы</h2>
		</div>
	);
};

export const Product = styled(ProductContainer)`
	width: 1480px;

	& .product-row {
		display: flex;

		& .image {
			width: 625px;
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
			padding: 30px 20px 20px;
			font-weight: 14px;
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
			padding: 30px 20px 20px;

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
