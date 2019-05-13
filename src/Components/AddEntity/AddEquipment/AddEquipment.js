import React from 'react';
import Title from '../../Title/Title';

let AddEquipment = props => {
	return (
		<div className='input-group'>
			<Title text='Add Equipment Data' />
			<div className='w-100 mb-1' />
			<input className='form-control' onChange={props.nameChange} type='text' placeHolder='Equipment Name' />
			<div className='w-100 mb-1' />
			<input className='form-control' onChange={props.priceChange} type='text' placeHolder='Price' />
			<div className='w-100 mb-1' />
			<button className='btn btn-warning' onClick={props.submit} >Add</button>
		</div>
		);
}

export default AddEquipment;