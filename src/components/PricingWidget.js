import React from 'react'
import { css } from '@emotion/react'

const PricingWidget = () => (
	<div css={css`
		position: relative;
		background: var(--orc-deep-purple);

		border-radius: 2rem;
		width: 100%;
		height: 445px;
		padding: 0;
		overflow: auto;
		box-shadow: 0px 4px 24px 0px #00000026;
	`}>
		<iframe css={css`
			display: block;
			width: 100%;
			height: 100%;
			min-height: 445px;
			min-width: 500px;
			border: 0;
			margin: 0;
		`} src="https://pat.net/orchid/widget/" />
	</div>
)

export default PricingWidget
