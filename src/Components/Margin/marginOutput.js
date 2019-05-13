import React, { Component } from 'react';
import '../../Containers/App.css';

let MarginOutput = props => {
	return (
		<div>
			<h6>Marginal cost: <span>${parseFloat(props.marginalCost).toFixed(2)}</span></h6>
			<h6>Total cost with margin: <span>${parseFloat(props.totalCost).toFixed(2)}</span></h6>
		</div>
		);
}

export default MarginOutput;