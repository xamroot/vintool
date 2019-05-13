import React, { Component } from 'react';
import '../../Containers/App.css';

let TruckingOutput = (props) => {
	let numLooseYardage = 0;
	let priceLooseYardage = 0;

	if (props.pricePerLooseYardage)
		priceLooseYardage = props.pricePerLooseYardage;

	if (props.looseYards)
		numLooseYardage = props.looseYards;

	return(
		<div>
			<h6 className='output'>Raw Price per Loose Yard: <span>${parseFloat(priceLooseYardage).toFixed(2)}</span></h6> 
			<h6 className='output'>Loose Yards: <span>{parseFloat(numLooseYardage).toFixed(2)}</span></h6>
		</div>
	);
}

export default TruckingOutput;