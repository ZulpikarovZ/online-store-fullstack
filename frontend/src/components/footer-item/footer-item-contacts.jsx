import styled from 'styled-components';
import { Icon } from '../icon/icon';
import vk from '../../assets/vk.png';
import instagram from '../../assets/instagram.png';
import telegram from '../../assets/telegram.png';
import whatsapp from '../../assets/whatsapp.png';
import { Link } from 'react-router-dom';

const FooterItemContactsContainer = ({ className }) => {
	return (
		<div className={className}>
			<h3>КОНТАКТЫ</h3>
			<ul className="contacts">
				<li>
					<Icon id="fa-phone" size="16px" className="icon" inactive={true} />
					<div className="text">+7(777)-999-77-77 , +7 (965) 777-77-77</div>
				</li>
				<li>
					<Icon
						id="fa-address-book"
						size="16px"
						className="icon"
						inactive={true}
					/>
					<div className="text">
						г. Москва, ул. Сущёвский вал, д.5, ст.6, ТК Савеловский, Мобильный
						павильон №777
					</div>
				</li>
				<li>
					<Icon id="fa-envelope" size="16px" className="icon" inactive={true} />
					<div className="text">info@zzm.ru</div>
				</li>
				<li>
					<Icon id="fa-clock-o" size="16px" className="icon" inactive={true} />
					<div className="text">
						Режим работы:
						<br />
						Пн-Вс 10:00—21:00
					</div>
				</li>
			</ul>
			<div className="social">
				<Link to="https://www.vk.com" target="_blank">
					<img src={vk} alt="" />
				</Link>
				<Link to="https://www.instagram.com" target="_blank">
					<img src={instagram} alt="" />
				</Link>
				<Link to="https://www.telegram.org" target="_blank">
					<img src={telegram} alt="" />
				</Link>
				<Link to="https://web.whatsapp.com" target="_blank">
					<img src={whatsapp} alt="" />
				</Link>
			</div>
		</div>
	);
};

export const FooterItemContacts = styled(FooterItemContactsContainer)`
	width: 25%;
	padding: 40px 30px 40px 40px;

	& .contacts {
		margin-bottom: 40px;

		& .icon {
			position: absolute;
			color: #4e7df1;
		}

		& li {
			position: relative;
		}

		& .text {
			padding-left: 25px;
		}
	}

	.social {
		margin-left: -10px;

		& img {
			width: 26px;
			margin-left: 10px;
		}

		& img:hover {
			opacity: 0.8;
		}
	}
`;
