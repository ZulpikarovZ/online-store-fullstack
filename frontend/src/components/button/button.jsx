import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	background-color: #f6a701;
	font-size: 14px;
	height: 46px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	border: 0;
	border-radius: 5px;
	color: #fff;
	transition: all 0.2s ease-out;

	&:hover {
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
	}
`;
