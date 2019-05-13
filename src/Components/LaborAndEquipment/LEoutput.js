import React from 'react';

let LEoutput = props => {
	return (
			<div>
				<h6>labor wage subtotal: ${parseFloat(props.laborCost).toFixed(2)}</h6>
				<h6>equipment price subtotal: ${parseFloat(props.equipCost).toFixed(2)}</h6>
				<h6>total LE cost: ${parseFloat(props.totalLECost).toFixed(2)}</h6>
			</div>
		);
}

export default LEoutput;