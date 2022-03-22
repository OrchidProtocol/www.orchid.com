import React from 'react'
import styled from "@emotion/styled";
import { break_mobile } from "./styles";

const Element = styled.div`
	--overflowSize: 5rem;
	margin: 0 calc(-1 * var(--overflowSize));
	width: calc(100% + var(--overflowSize) * 2);
	${break_mobile} {
		--overflowSize: 1.5rem;
	}
`;

const ContainerOverflow = (props) => {
	return <Element {...props}>
		{props.children}
	</Element>
}

export default ContainerOverflow;