import styled from 'styled-components';
import { forwardRef } from 'react';

const InputContainer = forwardRef(({ className, width, ...props }, ref) => {
	return <input className={className} {...props} ref={ref}></input>;
});

export const Input = styled(InputContainer)`
	width: ${({ width = '100%' }) => width};
	height: 48px;
	margin: 0 0 10px 0;
	padding: 10px 15px;
	font-size: 14px;
	background-color: #f6f6f6;
	border: 1px solid #eee;
	border-radius: 5px;
	outline: none;

	&:focus {
		background: #fff;
		border-color: #ccc;
	}

	&:hover {
		border-color: #ccc;
	}
`;
