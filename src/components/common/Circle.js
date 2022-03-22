import React from 'react'

const Circle = (props) => {
	return <div {...props} style={{
		backgroundColor: 'var(--orc-green-transparent)',
		borderRadius: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		...props.style
	}}>
		<div style={{
			padding: '50%',
		}} />
	</div>
}

export default Circle;