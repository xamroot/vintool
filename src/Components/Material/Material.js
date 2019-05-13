import React, { Component } from 'react';
import MaterialOutput from './MaterialOutput';
import Title from '../Title/Title';
import instance from '../Axios/axios-template';

class Material extends Component {
	state = {
		selectedCounty: 'Washtenaw',
		selectedPlant: 'Cadillac_Ann_Arbor',
		selectedMaterial: '1100L',
		costPerUnit: 53,
		sqrFootage: 0,
		depth: 0,
		materials: ['1100L', '1100T', '11A', '13A', '36A', '2C', '3C', '4C', '23A', '22AA', 'Milings', 'Tack-Coat'],
		tons: 0,
		cost: 0,
		countys: {
"Washtenaw": {
	"Cadillac_Ann_Arbor": {
		"1100L": 53, 
		"1100T": 53.5,
		"11A": 57.5, 
		"13A": 58.5, 
		"36A": 60.5, 
		"2C": 58.5,
		"3C": 58.5, 
		"4C": 61.5, 
		"23A": 10,
		"22AA": 10,
		"Milings": 8, 
		"Tack-Coat": 4
	},
	"Cadillac_Rawsonville": { 
		"1100L": 52, 
		"1100T": 52.5, 
		"11A": 56.5, 
		"13A": 57.5, 
		"36A": 59.5, 
		"2C": 57.5, 
		"3C": 57.5, 
		"4C": 60.5, 
		"23A": 10, 
		"22AA": 10, 
		"Milings": 8, 
		"Tack-Coat": 4
	}
},
"Livingston": {
	"Cadillac_Wixom": {
			"1100L": 52, 
			"1100T": 52.5, 
			"11A": 56.5, 
			"13A": 57.5, 
			"36A": 59.5, 
			"2C": 57.5, 
			"3C": 57.5, 
			"4C": 60.6, 
			"23A": 10, 
			"22AA": 10,
			"Milings": 8, 
			"Tack-Coat": 4
		}
	},
"Wayne": {
	"Cadillac_Romulus": {
			"1100L": 52, 
			"1100T": 52.5, 
			"11A": 56.5, 
			"13A": 57.5, 
			"36A": 59.5, 
			"2C": 57.5, 
			"3C": 57.5, 
			"4C": 60.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
		},
	"Cadillac_Dixson": {
			"1100L": 52, 
			"1100T": 52.5, 
			"11A": 56.5, 
			"13A": 57.5, 
			"36A": 59.5, 
			"2C": 57.5, 
			"3C": 57.5, 
			"4C": 60.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
		}, 
	"Ajax_Romulus" : {
			"1100L": 53.5, 
			"1100T": 53, 
			"11A": 60.5, 
			"13A": 58.5, 
			"36A": 60, 
			"2C": 57.5, 
			"3C": 57, 
			"4C": 59.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
		}
},
"Jackson": {
	"Michigan_Paving_and_Materials": {
			"1100L": 53.5, 
			"1100T": 53, 
			"11A": 60.5, 
			"13A": 58.5, 
			"36A": 60, 
			"2C": 57.5, 
			"3C": 57, 
			"4C": 59.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
		}
	},
"Oakland": {
		"Ajax_Troy": {
			"1100L": 53.5, 
			"1100T": 53, 
			"11A": 60.5, 
			"13A": 58.5, 
			"36A": 60, 
			"2C": 57.5, 
			"3C": 57, 
			"4C": 59.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			}, 
		"Cadillac Clarkston": {
			"1100L": 52, 
			"1100T": 52.5, 
			"11A": 56.5, 
			"13A": 57.5, 
			"36A": 59.5, 
			"2C": 57.5, 
			"3C": 57.5, 
			"4C": 60.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			},
		"Cadillac_Shelby": {
			"1100L": 52.5, 
			"1100T": 53, 
			"11A": 57, 
			"13A": 58, 
			"36A": 60, 
			"2C": 58, 
			"3C": 58, 
			"4C": 60, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			},
		"Cadillac Troy": {
			"1100L": 52.5, 
			"1100T": 53, 
			"11A": 57, 
			"13A": 58, 
			"36A": 60, 
			"2C": 58, 
			"3C": 58, 
			"4C": 61, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			}
		},
	"Monroe": {
		"Gerken_Monroe": {
			"1100L": 53.5, 
			"1100T": 53, 
			"11A": 60.5, 
			"13A": 58.5, 
			"36A": 60, 
			"2C": 57.5, 
			"3C": 57, 
			"4C": 59.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			}
		},
	"Lenawee": {
		"Gerken_Lenawee": {
			"1100L": 53.5, 
			"1100T": 53, 
			"11A": 60.5, 
			"13A": 58.5, 
			"36A": 60, 
			"2C": 57.5, 
			"3C": 57, 
			"4C": 59.5, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			}
		},
	"Macomb": {
		"Cadillac_Mt._Clemens": {
			"1100L": 52.5, 
			"1100T": 53, 
			"11A": 57, 
			"13A": 58, 
			"36A": 60, 
			"2C": 58, 
			"3C": 58, 
			"4C": 61, 
			"23A": 10, 
			"22AA": 10, 
			"Milings": 8, 
			"Tack-Coat": 4
			}
		}
}
	}

	componentDidMount () {
		this.getMaterials();
	}


	countyChangeHandler = (e) => {
		let newCounty = Object.keys(this.state.countys).filter(c => {
			return c === e.target.value;
		});

		let newPlant = Object.keys(this.state.countys[newCounty])[0];
		console.log(newPlant);

		let newCost = this.state.countys[newCounty][newPlant][this.state.selectedMaterial];

		this.setState({
			selectedCounty: e.target.value,
			selectedPlant: newPlant,
			costPerUnit: newCost
		})
	}


	plantChangeHandler = (e) => {
		let newCost = this.state.countys[this.state.selectedCounty][e.target.value][this.state.selectedMaterial];
		console.log(newCost);
		this.setState({
			selectedPlant: e.target.value,
			costPerUnit: newCost
		})
	}


	materialChangeHandler = (e) => {
		let county = Object.keys(this.state.countys).filter(c => {
			return c === this.state.selectedCounty;
		})

		let plant = Object.keys(this.state.countys[county]).filter(p => {
			return p === this.state.selectedPlant;
		})

		let material = Object.keys(this.state.countys[county][plant]).filter(m => {
			return m === e.target.value;
		})

		let cost = this.state.countys[county][plant][material];

		this.setState({
			selectedMaterial: e.target.value,
			costPerUnit: cost
		})
	}


	enterHandler = (e) => {
		const TONNAGE_MULTIPLIER = 1.4;
		let depth = 0;
		let sqrFootage = 0;
		let sqrYards = 0;
		let cubicYards = 0;
		let tons = 0;
		let totalAmount = 0;
		let totalCost = 0;
		let costPerUnit = 0;

		costPerUnit = this.state.costPerUnit;
		sqrFootage = this.state.sqrFootage;
		depth = this.state.depth;

		sqrYards = sqrFootage / 9;
		cubicYards = sqrYards / (36 / depth);
		tons = cubicYards * TONNAGE_MULTIPLIER;

		totalAmount = parseFloat((sqrFootage / 109) * (depth / 1.5)).toFixed(2);
		totalCost = parseFloat(totalAmount * costPerUnit).toFixed(2);
		console.log(costPerUnit);	

		this.setState({
			tons: tons,
			cost: totalCost
		})
	}


	sqrFootageInputHandler = (e) => {
		this.setState({
			sqrFootage: e.target.value
		})
	}


	depthInputHandler = (e) => {
		this.setState({
			depth: e.target.value
		})
	}


	getMaterials = () => {
		instance
		.get("/materials")
		.then(res => {
			let countys = JSON.parse(JSON.stringify(res.data));
			this.setState({countys});
		})
		.catch(err => {
			console.log(err);
		});
	}
	

	render() {
		let county = Object.keys(this.state.countys).filter(c => {
			return c === this.state.selectedCounty;
		})
		county = county[0];
		let plant = Object.keys(this.state.countys[county]).filter(p => {
			return p === this.state.selectedPlant;
		})
		plant = plant[0];


		let material = Object.keys(this.state.countys[county][plant]).filter(m => {
			return m === this.state.selectedMaterial;
		})
		material = material[0];

		let materialCost = this.state.countys[county][plant][material];
		/*Rory Q sucks*/
		let countyList = (
			<select className='custom-select' value={this.state.selectedCounty} onChange={this.countyChangeHandler}>
				{Object.keys(this.state.countys).map((county, index) =>{
					return(<option value={county} key={index}>{county}</option>);
				})}
			</select>
		)

		let plantList = (
			<select className='custom-select' value={this.state.selectedPlant} onChange={this.plantChangeHandler}>
				{Object.keys(this.state.countys[county]).map((plant,index) => {
					return (<option value={plant} key={index}>{plant}</option>);
				})}
			</select>
		)

		let materialList = (
			<select className='custom-select' value={this.state.selectedMaterial} onChange={this.materialChangeHandler}>
				{Object.keys(this.state.countys[county][plant]).map((material, index) => {
					return (<option value={material} key={index}>{material} price: ${this.state.countys[county][plant][material]}</option>);
					})}
			</select>
		)

		return(
			<div className='container-fluid'>
				<Title text={'Material Cost'} />
				<div className='input-group'>
					{countyList}
					<div className='w-100 mb-2' />
					{plantList}
					<div className='w-100 mb-2' />
					{materialList}
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.sqrFootageInputHandler} placeholder='Square Footage' />
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.depthInputHandler} placeholder='Depth' />
					<div className='w-100 mb-2' />
				</div>
				<button className='btn btn-warning' onClick={this.enterHandler}>Enter</button>
				<MaterialOutput tons={this.state.tons} cost={this.state.cost}/>
			</div>
			);
	}
}

export default Material;