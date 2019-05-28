import React, { Component } from 'react';
import LEitem from './LEitem';
import LEoutput from './LEoutput';
import Title from '../Title/Title';
import instance from '../Axios/axios-template';

class LaborAndEquipment extends Component {
	state = {
		equipment: [],
		laborers: [], 
		selectedEquipmentName: 'none',
		selectedEquipmentPrice: 0,
		selectedLaborerName: 'none',
		selectedLaborerWage: 0,
		listitems: []
	}

	componentDidMount() {
		this.getWorkers();
		this.getEquipment();
	}

	generateId = () => {
		let num1 = Math.floor(Math.random() * 10);
		let num2 = Math.floor(Math.random() * 10);
		let num3 = Math.floor(Math.random() * 10);
		return (num1 + '' + num2 + '' + num3);
	}

	addEquipHandler = (e) => {
		let newId = this.generateId();
		let newName = this.state.selectedEquipmentName;
		let newPrice = this.state.selectedEquipmentPrice;

		let newListEquip = {
			id: newId,
			name: newName,
			price: newPrice,
			type: 'equip'
		}
		this.setState({
			listitems: [...this.state.listitems, newListEquip]
		});
	}

	addLaborerHandler = (e) => {
		let newId = this.generateId();
		let newName = this.state.selectedLaborerName;
		let newWage = this.state.selectedLaborerWage;

		let newListLabor = {
			id: newId,
			name: newName,
			wage: newWage,
			type: 'labor'
		}
		this.setState({
			listitems: [...this.state.listitems, newListLabor]
		});
	}


	equipChangeHandler = (e) => {
		let newEquip = this.state.equipment.filter(eqp => {
			return eqp.name === e.target.value;
		});
		let name = newEquip[0].name;
		let price = newEquip[0].price;
		this.setState({
			selectedEquipmentName: name,
			selectedEquipmentPrice: price
		})
	}

	laborChangeHandler = (e) => {
		let newLabor = this.state.laborers.filter(lbr => {
			return lbr.name === e.target.value;
		});
		let name = newLabor[0].name;
		let price = newLabor[0].wage;
		this.setState({
			selectedLaborerName: name,
			selectedLaborerWage: price
		})
	}

	deleteHandler = (index) => {
		let listitems = [...this.state.listitems];
		listitems.splice(index, 1);
		this.setState({listitems: listitems});
	}

	getEquipment = () => {
		instance
		.get("/equipment")
		.then(res => {
			let equipment = [];
			Object.keys(res.data).forEach(equip => {
				equipment = [...equipment, {name: equip, price: res.data[equip]}];
			})
			this.setState({equipment});
		})
		.catch(err => {
			console.log(err);
		});
	}

	getWorkers = () => {
		instance
		.get("/workers")
		.then(res => {
			let laborers = [];
			Object.keys(res.data).forEach(worker => {
				laborers = [...laborers, {name: worker, wage: res.data[worker]}];
			})
			this.setState({laborers});
		})
		.catch(err => {
			console.log(err);
		});
	};

	render() {
		let equipSelect = (
			<select className='custom-select' onChange={this.equipChangeHandler}>
				{this.state.equipment.map((equip, i) =>{
					return(
						<option 
							key={equip.name+i} 
							value={equip.name}
						>
							{equip.name} price: ${equip.price}
						</option>
					);
				})}
			</select>
		);

		let laborSelect = (
			<select className='custom-select' onChange={this.laborChangeHandler}>
				{this.state.laborers.map((laborer, i) => {
					return <option key={laborer.name+i} value={laborer.name}>{laborer.name} wage: ${laborer.wage}</option>
				})}
			</select>
		);

		let items = (
			<div>
				{this.state.listitems.map((item, i) => {
					if(item.price === undefined) {
						return (<LEitem
							key={i}
							name={item.name}
							cost={item.wage}
							type={'Laborer'}
							del={this.deleteHandler}
						/>);
					} else {
						return (<LEitem
							key={i}
							name={item.name}
							cost={item.price}
							type={'Equipment'}
							del={this.deleteHandler}
						/>);
				}
				})}
			</div>
		);

		let laborCost = 0;
		let equipCost = 0;
		let totalLECost = 0;

		this.state.listitems.forEach(i => {
			console.log(i);
			if (i.price === undefined) {
				laborCost = parseFloat(laborCost) + parseFloat(i.wage);
				totalLECost = parseFloat(totalLECost) + parseFloat(i.wage);
			} else {
				equipCost = parseFloat(equipCost) + parseFloat(i.price);
				totalLECost = parseFloat(totalLECost) + parseFloat(i.price);
			}
		})

		return(
			<div className='container-fluid'>
				<Title text={'Labor & Equipment'} />
				<div className='input-group'>
					{equipSelect}
					<div className='input-group-append'>
						<button className='btn btn-warning' type='button' onClick={this.addEquipHandler}>Add</button>
					</div>
					<div className='w-100 mb-2' />
					{laborSelect}
					<div className='input-group-append'>
						<button className='btn btn-warning' type='button' onClick={this.addLaborerHandler}>Add</button>
					</div>
				</div>
				<LEoutput laborCost={laborCost} equipCost={equipCost} totalLECost={totalLECost} />
				{items}
			</div>
		);
	}
}

export default LaborAndEquipment;