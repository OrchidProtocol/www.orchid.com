import React from 'react'
import styled from '@emotion/styled';
import { flatShadow } from './styles';
const IndexCard = styled.div`
	${flatShadow}
	position: relative;
	width: 17rem;
	max-width: 100%;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&::before {
		pointer-events: none;
		content: "";
		position: absolute;
		top: 1rem;
		left: -1.25rem;
		width: 2rem;
		height: 2rem;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url(/img/shared/quotes.svg);
	}
	&.twitter::before {
		background-image: url(/img/shared/double-arrow.svg);
	}
`;
export default IndexCard;