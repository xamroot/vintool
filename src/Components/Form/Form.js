import React, {Component} from 'react';
import Lineitem from './Lineitem';
import Title from '../Title/Title';

class Form extends Component {

	state = {
			newId: 0,
			projectTitle: '',
			projectDate: '',
			projectEstimator: '',
			projectNumEst: '',
			projectChecked: '',
			projectAddress: '',
			nameVal: '',
			qtyVal: 0,
			unitsVal: '',
			unitPriceVal: 0,
			lineitems:[]
	};


	addLineitemHandler = () => {
		let newId = this.state.newId;
		let newName = this.state.nameVal;
		let newQty = this.state.qtyVal;
		let newUnits = this.state.unitsVal;
		let newUnitPrice = this.state.unitPriceVal;
		let newTotal = (newQty * newUnitPrice);

		if( !(newName === '') || !(newUnits === '') ){
			let newLineitem = {
				id: newId,
				name: newName, 
				quantity: newQty, 
				units: newUnits, 
				unitPrice: newUnitPrice,
				total: newTotal
			};
			console.log(newLineitem);
			this.setState({
				lineitems: [...this.state.lineitems, newLineitem],
				newId: newId++
			});
		} else {
			{ alert("Name and Units cannot be blank"); }
		}
	}


	deleteHandler = (index) => {
		const lineitems = [...this.state.lineitems];
		lineitems.splice(index, 1);
		this.setState({lineitems: lineitems});
	}


	updateHandler = (id) => {
		const index = this.state.lineitems.findIndex(lineitem => lineitem.id === id);
		const lineitem = { ...this.state.lineitems[index]};
		const lineitems = [...this.state.lineitems];

		lineitem.name = this.state.nameVal;
		lineitem.quantity = this.state.qtyVal;
		lineitem.units = this.state.unitsVal;
		lineitem.unitPrice = this.state.unitPriceVal;
		lineitems[index] = lineitem;

		this.setState( {lineitems: lineitems});
	}


	makePDF = () => {
		let namesToPrint = [];
		let qtyToPrint = [];
		let unitsToPrint = [];
		let unitPriceToPrint = [];
		let totalToPrint = [];

	    let pdfConverter = require('jspdf');
	    let doc = new pdfConverter('p','pt','c6');

	   	doc.setFontSize(10);
	    doc.text(5, 20, 'Title: ' + this.state.projectTitle);
	    doc.text(180, 20, 'Date: ' + this.state.projectDate);
	    doc.text(5, 40, 'Estimator: ' + this.state.projectEstimator);
	    doc.text(180, 40, 'Checked By: ' + this.state.projectChecked);
	    doc.text(5, 60, 'Client Address: ' + this.state.projectAddress);
	    doc.text(180, 60, 'Estimate #: ' + this.state.projectNumEst);

		this.state.lineitems.map((lineitem, index) =>{
			namesToPrint.push(lineitem.name);
			qtyToPrint.push(lineitem.quantity);
			unitsToPrint.push(lineitem.units);
			unitPriceToPrint.push(lineitem.unitPrice);
			totalToPrint.push(lineitem.total.toString());
		});

	    for(let i = 0; i < namesToPrint.length; i++){
	    	let xVal = 5;
	    	let yVal = 80 + (10 * i);
	    	doc.text(xVal, yVal, namesToPrint[i]);
	    	doc.text(xVal + 55, yVal, qtyToPrint[i]);
	    	doc.text(xVal + 110, yVal, unitsToPrint[i]);
	    	doc.text(xVal + 165, yVal, unitPriceToPrint[i]);
	    	doc.text(xVal + 220, yVal, totalToPrint[i]);
	    }

	    doc.save("test.pdf");
	}


	//Lineitem input handlers
	onInputChangeNameHandler = (e) => {
		this.setState({nameVal:e.target.value});
	}
	onInputChangeQuantityHandler = (e) => {
		this.setState({qtyVal:e.target.value});
	}
	onInputChangeUnitsHandler = (e) => {
		this.setState({unitsVal:e.target.value});
	}
	onInputChangeUnitPriceHandler = (e) => {
		this.setState({unitPriceVal:e.target.value});
	}
	//Project Meta-Data input handlers
	onInputChangeTitleHandler = (e) => {
		this.setState({projectTitle: e.target.value});
	}
	onInputChangeDateHandler = (e) => {
		this.setState({projectDate: e.target.value});
	}
	onInputChangeEstimatorHandler = (e) => {
		this.setState({projectEstimator: e.target.value});
	}
	onInputChangeCheckedHandler = (e) => {
		this.setState({projectChecked: e.target.value});
	}
	onInputChangeNumEstHandler = (e) => {
		this.setState({projectNumEst: e.target.value});
	}
	onInputChangeAddressHandler = (e) => {
		this.setState({projectAddress: e.target.value});
	}


	render() {
		let lineitems = <p>no line items!</p>;
		let total = 0;

		lineitems = this.state.lineitems.map((lineitem, index) =>{
				return <Lineitem
					edit={() => this.updateHandler(lineitem.id)}
					del={this.deleteHandler}
					key={index+lineitem.id}
					name={lineitem.name}
					quantity={lineitem.quantity}
					units={lineitem.units}
					unitPrice={lineitem.unitPrice}
					total={lineitem.total}
				/>
			});

		return(
			<div className='container-fluid m-0'>
				<Title text={'Project Details'} />
				<div className='input-group'>
					<div className='input-group-prepend'>
						<span className='input-group-text'>Title</span>
					</div>
					<input className='form-control' onChange={this.onInputChangeTitleHandler}  placeholder='Title'/>
					<div className='w-100 mb-2' />
					<div className='input-group-prepend'>
						<span className='input-group-text'>Date</span>
					</div>
					<input className='form-control' onChange={this.onInputChangeDateHandler} placeholder='Date '/>
					<div className='w-100 mb-2' />
					<div className='input-group-prepend'>
						<span className='input-group-text'>Estimator</span>
					</div>
					<input className='form-control' onChange={this.onInputChangeEstimatorHandler} placeholder='Estimator' />
					<div className='w-100 mb-2' />
					<div className='input-group-prepend'>
						<span className='input-group-text'>Checked By</span>
					</div>
					<input className='form-control' onChange={this.onInputChangeCheckedHandler} placeholder='Checked By' />
					<div className='w-100 mb-2' />
					<div className='input-group-prepend'>
						<span className='input-group-text'>Estimate #</span>
					</div>
					<input className='form-control' onChange={this.onInputChangeNumEstHandler} placeholder='Estimate #' />
					<div className='w-100 mb-2' />
					<div className='input-group-prepend'>
						<span className='input-group-text'>Client Address</span>
					</div>
					<input className='form-control' onChange={this.onInputChangeAddressHandler} placeholder='Client Address' />
					<div className='w-100 mb-2' />

					<div class="btn-group mb-2" role="group" aria-label="Basic example">
						<button type="button" className="btn btn-warning" onClick={this.makePDF}>Save PDF</button>
					</div>

					<div className='w-100' />
					<Title text={'Lineitem list'} />
					<div className='w-100 mb-2' />

					<div className='input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>name</span>
						</div>
						<input onChange={this.onInputChangeNameHandler} type='text' className='form-control' placeholder='name'/>
						<div className='w-100 mb-2' />
						<div className='input-group-prepend'>
							<span className='input-group-text'>quantity</span>
						</div>
						<input onChange={this.onInputChangeQuantityHandler} type='text' className='form-control' placeholder='quantity'/>
						<div className='w-100 mb-2' />
						<div className='input-group-prepend'>
							<span className='input-group-text'>units</span>
						</div>
						<input onChange={this.onInputChangeUnitsHandler} type='numeric' className='form-control' placeholder='units'/>
						<div className='w-100 mb-2' />
						<div className='input-group-prepend'>
							<span className='input-group-text'>unit price</span>
						</div>
						<input onChange={this.onInputChangeUnitPriceHandler} type='numeric' className='form-control' placeholder='unit price'/>
						<div className='w-100 mb-2' />
					</div>

					<div class="btn-group mb-2" role="group" aria-label="Basic example">
						 <button type="button" className="btn btn-warning" onClick={this.addLineitemHandler}>Add Lineitem</button>
					</div>
					<div className='w-100 mb-2' />

					<table className='table table-dark mb-3'>
						<thead>
							<tr>
								<th scope='col' style={{color: 'black'}}>delete</th>
								<th scope='col'>name</th>
								<th scope='col'>quantity</th>
								<th scope='col'>units</th>
								<th scope='col'>unit price</th>
								<th scope='col'>item subtotal</th>
							</tr>
						</thead>
						<tbody>
							{lineitems}
						</tbody>
					</table>
				</div>
			</div>

		);
	}
};


export default Form;