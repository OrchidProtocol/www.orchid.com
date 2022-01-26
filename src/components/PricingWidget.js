import React from 'react'
import { css } from '@emotion/react'

const PricingWidget = () => (
	<div css={css`
		position: relative;
		background: var(--orc-deep-purple);

		--height: 470px;
		@media (max-width: 1000px) {
			--height: 470px;
		}

		border-radius: 2rem;
		width: 100%;
		height: var(--height);
		padding: 0;
		overflow: auto;
		box-shadow: 0px 4px 24px 0px #00000026;
	`}>
		<div css={css`
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			color: white;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			`}>Widget loading... (May not work on some mobile devices)</div>
		<iframe css={css`
			display: block;
			position: relative;
			width: 100%;
			height: 100%;
			min-height: var(--height);
			border: 0;
			margin: 0;
		`} title="Deposit Size Chart" src="https://account.orchid.com/widget/" />
	</div>
)

export default PricingWidget
