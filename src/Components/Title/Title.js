import React from 'react';

let Title = props => {
	return (
		<div className='w-100 p-2 pt-3 pl-4 pb-2 mb-2 mt-2 mb-3' style={{backgroundColor: '#343a40'}}>
			<h2 style={{color: '#ffc107'}}>{props.text}</h2>
		</div>
		);
}

export default Title;