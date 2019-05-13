import React, { Component } from 'react';
import Form from '../Components/Form/Form';
import Trucking from '../Components/Trucking/Trucking';
import Material from '../Components/Material/Material';
import LaborAndEquipment from '../Components/LaborAndEquipment/LaborAndEquipment';
import Margin from '../Components/Margin/Margin';

class EstimateApp extends Component {
	state = {
		project: ''
	}

	render() {
		return (
			<div className='m-0 p-0'>
				<div className='container-fluid row pr-0'>
					<div className='col-5'>
						<Form submitHandler={this.handleNewProject}/>
					</div>
					<div className='col-4'>
						<Margin />
						<Material />
						<LaborAndEquipment />
					</div>
					<div className='col-3'>
						<Trucking />
					</div>
				</div>
			</div>
		);
	}
}


export default EstimateApp;