import React from 'react'
import styled from "@emotion/styled";
import { break_mobile, shadow } from "./styles";

const Element = styled.div`
	${shadow}
	position: relative;
	z-index: 1;
	padding: 2.5rem 4rem;
	border-radius: 1rem;
	margin: 3rem auto;
	${break_mobile} {
		border-radius: 2rem;
		padding: 2rem 2rem;
		margin: 1.5rem auto;
	}
	background: white;
	max-width: 90%;
	width: 60rem;
	box-sizing: border-box;
	
	&.dark {
		background: var(--orc-rock-gray);
		color: #FFFFFF;
		--orc-primary: var(--orc-bright-purple);
	}

	&.phantom {
		background: transparent;
		box-shadow: none;
	}
`;

const Container = (props) => {
	return <Element {...props}>
		{props.children}
	</Element>
}

export default Container;