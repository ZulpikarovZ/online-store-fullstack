import styled from 'styled-components';
import footerLogo from '../../assets/footer-logo.svg';

const FooterItemDescContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>
				<img src={footerLogo} alt="" width="200px" />
			</div>
			<p className="description">
				Компания zzm уже более 10 лет на рынке оптовой реализации смартфонов! Мы
				работаем по всей России и доставляем технику в любой уголок нашей
				необъятной родины! Если вы ищете надежного поставщика, то zzm - лучший
				выбор.
			</p>
		</div>
	);
};

export const FooterItemDesc = styled(FooterItemDescContainer)`
	width: 25%;
	padding: 40px;

	& .description {
		line-height: 1.8;
	}
`;
