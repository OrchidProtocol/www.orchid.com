import React from 'react'

const Divider = (props) => {
	return <div {...props} className={'w-10/12 max-w-2xl mx-auto rounded h-1 relative z-10' + (props.className ? ' ' + props.className : 'bg-purple')} />
}

export default Divider;