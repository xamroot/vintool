import React, {Component} from 'react';
import instance from '../Components/Axios/axios-template';
import AddWorker from '../Components/AddEntity/AddWorker/AddWorker';
import AddEquipment from '../Components/AddEntity/AddEquipment/AddEquipment';
import AddMaterial from '../Components/AddEntity/AddMaterial/AddMaterial';

class Settings extends Component {
	state = {
		selectedOption: 'Workers',
		loadedData: [],
		workerName: "",
		workerWage: "",
		equipmentName: "",
		equipmentPrice: "",
		materialCounty: "",
		materialPlant: "",
		materialMaterial: "",
		materialPrice: 0,
		changed: true
	}

	componentDidMount() {
		this.getWorkers();
	}

	deleteWorker = e => {
		let toDelete = e.target.id;
		instance
		.delete("/workers", {data: {nameToDelete: toDelete}})
		.then(res => {
			console.log(toDelete);
			console.log(res);
			this.setState({"changed": true});
		})
	}

	postWorkers = () => {
		instance
		.post("/workers", {name: this.state.workerName, wage: this.state.workerWage})
		.then(res => {
			console.log(res);
			this.setState({"changed": true});
		})
	}

	getWorkers = () => {
		instance
		.get("/workers")
		.then(res => {
			let loadedData = [];
			let name = "none";
			let wage = 0;
			Object.keys(res.data).forEach(worker => {
				loadedData = [...loadedData, {name: worker, wage: res.data[worker]}];
			})
			this.setState({loadedData, changed: false});
		})
		.catch(err => {
			console.log(err);
		});
	};


	deleteEquipment = e => {
		let toDelete = e.target.id;
		instance
		.delete("/equipment", {data: {nameToDelete: toDelete}})
		.then(res => {
			console.log(toDelete);
			console.log(res);
			this.setState({"changed": true});
		})
	}



	postEquipment = () => {
		instance
		.post("/equipment", {name: this.state.equipmentName, price: this.state.equipmentPrice})
		.then(res => {
			console.log(res);
			this.setState({"changed": true});
		})
	}


	getEquipment = () => {
		instance
		.get("/equipment")
		.then(res => {
			let loadedData = [];
			let name = "none";
			let price = 0;
			Object.keys(res.data).forEach(equipment => {
				loadedData = [...loadedData, {name: equipment, price: res.data[equipment]}];
			})
			this.setState({loadedData, changed: false});
		})
		.catch(err => {
			console.log(err);
		});
	}


	deleteMaterials = (county, plant, material, price) => {
		console.log(county);
		instance
		.delete("/materials", {data: {county, plant, material, price}})
		.then(res => {
			console.log(res);
			this.setState({"changed": true});
		})
	}


	postMaterials = () => {
		instance
		.post("/materials", {
			county: this.state.materialCounty, 
			plant: this.state.materialPlant,
			material: this.state.materialMaterial,
			price: this.state.materialPrice})
		.then(res => {
			console.log(res);
			this.setState({"changed": true});
		})
	}



	getMaterials = () => {
		instance
		.get("/materials")
		.then(res => {
			let loadedData = [];
			let name = "none";
			let price = 0;
			Object.keys(res.data).forEach(county => {
				Object.keys(res.data[county]).forEach(plant => {
					Object.keys(res.data[county][plant]).forEach(material => {
						loadedData = [...loadedData, {county, plant, material, price:res.data[county][plant][material]}];
					})
				})
			})
			this.setState({loadedData, changed: false});
		})
		.catch(err => {
			console.log(err);
		});
	}


	setChanged = () => {
		this.setState({changed: !this.state.changed});
	}


	workersNameChangeHandler = e => {
		this.setState({workerName: e.target.value});
	}

	workersWageChangeHandler = e => {
		this.setState({workerWage: e.target.value});
	}

	equipmentNameChangeHandler = e => {
		this.setState({equipmentName: e.target.value});
	}

	equipmentPriceChangeHandler = e => {
		this.setState({equipmentPrice: e.target.value});
	}

	matCountyChangeHandler = e => {
		this.setState({materialCounty: e.target.value});
	}

	matPlantChangeHandler = e => {
		this.setState({materialPlant: e.target.value});
	}

	matMaterialChangeHandler = e => {
		this.setState({materialMaterial: e.target.value});
	}

	matPriceChangeHandler = e => {
		this.setState({materialPrice: e.target.value});
	}





	optionSelectedChangeHandler = e => {
		this.setState({selectedOption: e.target.value, changed: true});
	}


	render() {
		let loadedData = <tr><td>none</td><td>none</td></tr>;
		let headData = <tr><th scope="col">none</th><th scope="col">none</th></tr>;
		let addEntity = <AddWorker />

		if (this.state.loadedData.length > 0) {
			switch(this.state.selectedOption) {
				case "Workers":
					if (this.state.changed)
						this.getWorkers();
					headData = <tr><th scope="col">worker name</th><th scope="col">wage</th></tr>;
					addEntity = <AddWorker
						wageChange={this.workersWageChangeHandler} 
						nameChange={this.workersNameChangeHandler} 
						submit={this.postWorkers} />
					loadedData = this.state.loadedData.map(data => {
						return(
							<tr>
								<td scope='row'> <button id={data.name} onClick={this.deleteWorker} className='btn btn-danger'>Delete</button></td>
								<td>{data.name}</td>
								<td>{data.wage}</td>
							</tr>
							);
					})
					break;
				case "Equipment":
					if (this.state.changed)
						this.getEquipment();
					headData = <tr><th scope="col">equipment name</th><th scope="col">price</th></tr>;
					addEntity = <AddEquipment 
						nameChange={this.equipmentNameChangeHandler}
						priceChange={this.equipmentPriceChangeHandler}
						submit={this.postEquipment} />
					loadedData = this.state.loadedData.map(data => {
						return(
							<tr>
								<td scope='row'> <button id={data.name} onClick={this.deleteEquipment} className='btn btn-danger'>Delete</button></td>
								<td>{data.name}</td>
								<td>{data.price}</td>
							</tr>
							);
					})
					break;
				case "Materials":
					if (this.state.changed)
						this.getMaterials();
					addEntity = <AddMaterial 
						countyChange={this.matCountyChangeHandler}
						plantChange={this.matPlantChangeHandler}
						materialChange={this.matMaterialChangeHandler}
						priceChange={this.matPriceChangeHandler}
						submit={this.postMaterials} />
					headData = <tr><th scope="col">county</th><th scope="col">plant</th><th scope="col">material</th><th scope="col">price</th></tr>;
					loadedData = this.state.loadedData.map(data => {
						return(
							<tr>
								<td scope='row'> <button onClick={() => this.deleteMaterials(data.county, data.plant, data.material, data.price) } className='btn btn-danger'>Delete</button></td>
								<td>{data.county}</td>
								<td>{data.plant}</td>
								<td>{data.material}</td>
								<td>{data.price}</td>
							</tr>
							);
					})
					break;
			}
		}

		console.log(loadedData);

		return (
			<div className='row m-0 p-0'>
				<div className="col-5">
					<div className="input-group">
						<h5>Select a category to view respective data</h5>
						<div className='w-100' />
						<h5>Click a row to edit the data</h5>
						<div className='w-100' />
						<h5>Or add a new one!</h5>
						<div className='w-100' />
						<select className='custom-select' onChange={this.optionSelectedChangeHandler} >
							<option> Workers </option>
							<option> Equipment </option>
							<option> Materials </option>
						</select>
						<div className='w-100 mb-1' />
					</div>
					<table className='table table-dark mb-3'>
					<thead>
						{headData}
					</thead>
					<tbody>
						{loadedData}
					</tbody>
					</table>
				</div>
				<div className='col-2' />
				<div className='col-4'>
					{addEntity}
				</div>
			</div>
			);
	}
}

export default Settings;