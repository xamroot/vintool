import React, { Component } from 'react';
import MarginOutput from './marginOutput';
import Title from '../Title/Title';

class Margin extends Component {
	state = {
		cost: 0,
		margin: 0,
		shownCost: 0,
		shownMargin: 0,
		marginalCost: 0,
		totalCost: 0
	}

	enterButtonHandler = (e) => {
		let margin = this.state.margin;
		let cost = this.state.cost;
		let marginalCost = margin * cost;
		let totalCost = parseFloat(margin * cost + cost);
		this.setState({
			shownCost: cost,
			shownMargin: margin,
			marginalCost: marginalCost,
			totalCost: totalCost
		});	
	}

	marginInputHandler = (e) => {
		let newMargin = e.target.value / 100;
		this.setState({
			margin: parseFloat(newMargin)
		});
	}

	costInputHandler = (e) => {
		let newCost = e.target.value;
		this.setState({
			cost: parseFloat(newCost)
		});
	}

	render() {
		return (
			<div className='container-fluid'>
				<Title text={'Margin Cost'} />
				<div className='input-group'>
					<input type='integer' className='form-control mr-1' placeholder='cost $' onChange={this.costInputHandler}/>
					<input className='form-control ml-1' placeholder='Margin %' onChange={this.marginInputHandler}/>
					<div className='w-100 mb-2' />
				</div>
				<button className='btn btn-warning' onClick={this.enterButtonHandler}>Enter</button>
				<MarginOutput totalCost={this.state.totalCost} marginalCost={this.state.marginalCost} />
			</div>
		);
	}
}


export default Margin;