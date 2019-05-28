import React, { Component } from 'react';
import '../../Containers/App.css';

class MaterialOutput extends Component  {
	render() {
		return(
			<div>
				<h6>Cost before tax: <span>${parseFloat(this.props.cost).toFixed(2)}</span></h6>
				<h6>Cost after tax: <span>${parseFloat(this.props.costWithTax).toFixed(2)}</span></h6>
				<h6>Tons: <span>{parseFloat(this.props.tons).toFixed(2)}</span></h6>
			</div>
		);
	}
}

export default MaterialOutput;