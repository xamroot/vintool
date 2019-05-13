import React from 'react';
import Title from '../../Title/Title';

let AddMaterial = props => {
	return (
		<div className='input-group'>
			<Title text='Add Material Data' />
			<div className='w-100 mb-1' />
			<input className='form-control' type='text' placeHolder='County' onChange={props.countyChange}/>
			<div className='w-100 mb-1' />
			<input className='form-control' type='text' placeHolder='Plant' onChange={props.plantChange}/>
			<div className='w-100 mb-1' />
			<input className='form-control' type='text' placeHolder='Material' onChange={props.materialChange}/>
			<div className='w-100 mb-1' />
			<input className='form-control' type='text' placeHolder='Price' onChange={props.priceChange}/>
			<div className='w-100 mb-1' />
			<button className='btn btn-warning'onClick={props.submit}>Add</button>
		</div>
		);
}

export default AddMaterial;