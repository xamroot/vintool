import React, {Component} from 'react';

let Lineitem = (props) => {
	let quantity = props.quantity;
	let unitPrice = parseFloat(props.unitPrice).toFixed(2);
	let total = parseFloat(props.total).toFixed(2);
	return (
		<tr>
			<td scope='row'> <button onClick={props.del} className='btn btn-danger'>Delete</button> </td>
			<td>{props.name}</td>
			<td>{quantity}</td>
			<td>{props.units}</td>
			<td>$ + {unitPrice}</td>
			<td>$ + {total}</td>
		</tr>
	);
}
export default Lineitem;