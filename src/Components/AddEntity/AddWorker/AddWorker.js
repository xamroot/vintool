import React from 'react';
import Title from '../../Title/Title';

let AddWorker = props => {
	return (
		<div className='input-group'>
			<Title text='Add Worker Data' />
			<div className='w-100 mb-1' />
			<input className='form-control' type='text' placeHolder='Worker Name' onChange={props.nameChange} />
			<div className='w-100 mb-1' />
			<input className='form-control' type='text' placeHolder='Wage' onChange={props.wageChange} />
			<div className='w-100 mb-1' />
			<button className='btn btn-warning' onClick={props.submit}>Add</button>
		</div>
		);
}

export default AddWorker;