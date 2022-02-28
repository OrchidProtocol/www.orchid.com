import React from 'react'
import styled from "@emotion/styled";
import { break_mobile, shadow } from "./styles";

const Element = styled.div`
	margin: 0 -2.5rem;
	${break_mobile} {
		margin: 0;
	}
`;

const ContainerOverflow = (props) => {
	return <Element {...props}>
		{props.children}
	</Element>
}

export default ContainerOverflow;