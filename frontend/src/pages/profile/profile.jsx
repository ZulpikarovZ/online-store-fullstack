import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from '../../redux/selectors';
import { Button, PrivateContent } from '../../components';
import { useNavigate } from 'react-router-dom';
import { ROLE } from '../../constants';

const ProfileContainer = ({ className }) => {
	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const isAdmin = user.roleId === ROLE.ADMIN;

	const btnClick = () => navigate('/products');

	return (
		<PrivateContent access={[ROLE.ADMIN, ROLE.USER]}>
			<div className={className}>
				<h2>Профиль</h2>
				<ul className="information">
					<li>
						<div>Login:</div>
						<div>{user.login}</div>
					</li>
					<li>
						<div>Email:</div>
						<div>{user.email}</div>
					</li>
					<li>
						<div>Registered:</div>
						<div>{user.registeredAt}</div>
					</li>
				</ul>
				{isAdmin && (
					<Button width="800px" onClick={btnClick}>
						Admin Panel
					</Button>
				)}
			</div>
		</PrivateContent>
	);
};

export const Profile = styled(ProfileContainer)`
	width: 1480px;
	margin: 0 auto;
	padding: 0 30px;
	font-weight: 500;

	& .information {
		max-width: 800px;
		margin-bottom: 40px;

		& li {
			display: flex;
			border-bottom: 1px solid #eee;
			padding: 15px 0;

			& div:nth-child(odd) {
				width: 240px;
				margin-right: 30px;
			}

			& div:nth-child(even) {
				font-weight: 400;
			}
		}
	}
`;
