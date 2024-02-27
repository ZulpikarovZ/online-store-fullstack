import styled from 'styled-components';
import image from '../../assets/404.svg';
import { Button } from '../../components';
import { Link } from 'react-router-dom';

const Page404Container = ({ className }) => {
	return (
		<div className={className}>
			<div className="error-404">
				<img className="img" src={image} alt="404" />
				<div className="inf">СТРАНИЦА НЕ НАЙДЕНА</div>
				<div className="text">
					Страница, которую вы ищете, не существует или была перемещена.
				</div>
				<Link to="/">
					<Button width="250px">Вернуться на главную страницу</Button>
				</Link>
			</div>
		</div>
	);
};

export const Page404 = styled(Page404Container)`
	text-align: center;

	& .img {
		max-width: 400px;
		margin-bottom: 40px;
		width: 100%;
	}

	& .inf {
		font-size: 3.125rem;
		font-weight: 700;
		margin-bottom: 10px;
	}

	& .text {
		font-size: 1.125rem;
		font-weight: 500;
		margin-bottom: 30px;
	}
`;
