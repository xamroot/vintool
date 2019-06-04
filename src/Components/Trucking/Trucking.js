import React, { Component } from 'react';
import TruckingOutput from './TruckingOutput';
import Title from '../Title/Title';

class Trucking extends Component {

	state = {
		sqrFootage: 0,
		depth: 0,
		triTrucks: 0,
		quadTrucks: 0,
		semiTrucks: 0,
		trainTrucks: 0,
		plantToJob: 0,
		looseYards: 0,
		fluffFactor: 'Asphalt',
		pricePerLooseYardage: 0
	};


	getAverageLoad = (numTri, numQuad, numSemi, numTrain) => {
		const TRI_TRUCK_YARDS = 12;
		const QUAD_TRUCK_YARDS = 16;
		const SEMI_TRUCK_YARDS = 24;
		const TRAIN_TRUCK_YARDS = 40;

		//let numTri = this.state.triTrucks;
		//let numQuad = this.state.quadTrucks;
		//let numSemi = this.state.semiTrucks;
		//let numTrain = this.state.trainTrucks;

		let capTri = (TRI_TRUCK_YARDS * numTri);
		let capQuad = (QUAD_TRUCK_YARDS * numQuad);
		let capSemi = (SEMI_TRUCK_YARDS * numSemi);
		let capTrain = (TRAIN_TRUCK_YARDS * numTrain);
		
		let numTrucks = numTri + numQuad + numSemi + numTrain;
		
		let capTotal = capTri + capQuad + capSemi + capTrain;
		
		let avgLoad = (capTotal / numTrucks);
		return avgLoad;
	}


	getTruckRate = (numTri, numQuad, numSemi, numTrain) => {
		const TRI_TRUCK_COST = 85;
		const QUAD_TRUCK_COST = 95;
		const SEMI_TRUCK_COST = 105;
		const TRAIN_TRUCK_COST = 145;

		var costTri = TRI_TRUCK_COST * numTri;
		var costQuad = QUAD_TRUCK_COST * numQuad;
		var costSemi =  SEMI_TRUCK_COST * numSemi;
		var costTrain =  TRAIN_TRUCK_COST * numTrain;
		
		var total = costTri + costQuad + costSemi + costTrain;
		return total;
	}


	roundTripTime = (distancePTJ) => {
		return (distancePTJ / 60) * 2;
	}


	roundsPerHour = (roundTripTime, numTri, numQuad, numSemi, numTrain) => {
		let totalTrucks = numTri + numQuad + numSemi + numTrain;
		return totalTrucks / roundTripTime;
	}


	calculateCubicYardage = (sqrFootage, depth) => {
		let sqrYards = sqrFootage / 9;
		let cubicYards = sqrYards / (36 / depth);
		return cubicYards;
	}


	calculateLooseYardage = (cubicYards, fluff) => {
		let fluffValue = 0;
		let looseYards = 0;
		switch(fluff) {
			case 'Asphalt':
				fluffValue = 1.5;
				break;
			case 'Concrete':
				fluffValue = 1.8;
				break;
			case 'Dirt':
				fluffValue = 1.3;
				break;
			case 'Sand':
				fluffValue = 2;
				break;
			default:
				fluffValue = 1.5;
				break;
		}
		looseYards = cubicYards * fluffValue;
		return looseYards;
	}


	getPricePerLY = (totalTrucking, avgLoad, roundsPerHour, looseYd) => {
		return totalTrucking / (avgLoad * roundsPerHour);
	}


	//Enter Handler
	enterHandler = (e) => {
		let sqrFootage = this.state.sqrFootage;
		let depth = this.state.depth;
		let fluff = this.state.fluffFactor;

		let numTri = this.state.triTrucks;
		let numQuad = this.state.quadTrucks;
		let numSemi = this.state.semiTrucks;
		let numTrain = this.state.trainTrucks;
		let distancePTJ = this.state.plantToJob;

		//Step1. Get the average load and truck rate
		let averageLoad = this.getAverageLoad(numTri, numQuad, numSemi, numTrain);
		let truckRate = this.getTruckRate(numTri, numQuad, numSemi, numTrain);
		
		//Step2. Get the round trip time
		let roundTripTime = this.roundTripTime(distancePTJ);
		
		//Step3. Get the rounds per hour
		let roundsPerHour = this.roundsPerHour(roundTripTime, numTri, numQuad, numSemi, numTrain);
		
		//Step4. Get the tonnage
		let cubicYards = this.calculateCubicYardage(sqrFootage, depth);
		let looseYards = this.calculateLooseYardage(cubicYards, fluff);
		
		//Step5. Get the price per loose yardage
		let pricePerLooseYardage = this.getPricePerLY(truckRate, averageLoad, roundsPerHour, looseYards)
		this.setState({
			pricePerLooseYardage: pricePerLooseYardage, 
			looseYards: looseYards
		});
	}

	//Input change handlers
	onSFInputChangeHandler = (e) => {
		this.setState({sqrFootage: e.target.value});
	}
	onDepthInputChangeHandler = (e) => {
		this.setState({depth: e.target.value});
	}
	onTriTrucksInputChangeHandler = (e) => {
		this.setState({triTrucks: e.target.value});
	}
	onQuadTrucksInputChangeHandler = (e) => {
		this.setState({quadTrucks: e.target.value});
	}
	onSemiTrucksInputChangeHandler = (e) => {
		this.setState({semiTrucks: e.target.value});
	}
	onTrainTrucksInputChangeHandler = (e) => {
		this.setState({trainTrucks: e.target.value});
	}
	onSTPInputChangeHandler = (e) => {
		this.setState({startToPlant: e.target.value});
	}
	onPTJInputChangeHandler = (e) => {
		this.setState({plantToJob: e.target.value});
	}
	onJTSInputChangeHandler = (e) => {
		this.setState({jobToStart: e.target.value});
	}
	fluffChangeHandler = (e) => {
		this.setState({fluffFactor: e.target.value});
	}

	render() {

		return (
			<div className='container-fluid'>
				<Title text={'Trucking Cost'} />
				<div className='input-groud'>
					<input className='form-control' onChange={this.onTriTrucksInputChangeHandler} placeholder='Tri-Axel Trucks' />
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.onQuadTrucksInputChangeHandler} placeholder='Quad-Axel Trucks' />
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.onSemiTrucksInputChangeHandler} placeholder='Semi Trucks' />
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.onTrainTrucksInputChangeHandler} placeholder='Train Trucks' />
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.onSFInputChangeHandler} placeholder='Square Footage' />
					<div className='w-100 mb-2' />
					<input className='form-control' onChange={this.onDepthInputChangeHandler} placeholder='depth' />
					<div className='w-100 mb-2' />
					<select className='custom-select' value={this.state.fluffFactor} onChange={this.fluffChangeHandler}>
						<option value='Asphalt'>Asphalt</option>
						<option value='Concrete'>Concrete</option>
						<option value='Dirt'>Dirt</option>
						<option value='Sand'>Sand</option>
					</select>
				</div>
				<div>
					<button type="button" className="btn btn-warning" onClick={this.enterHandler}>Calculate</button>
				</div>
				<TruckingOutput pricePerLooseYardage={this.state.pricePerLooseYardage} looseYards={this.state.looseYards} />
			</div>
		);
	}
}

export default Trucking;