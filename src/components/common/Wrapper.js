import React from 'react'
import styled from "@emotion/styled";

const Element = styled.div`
	margin: 1rem 0;
`;

const Wrapper = (props) => {
	return <Element {...props}>
		{props.children}
	</Element>
}

export default Wrapper;