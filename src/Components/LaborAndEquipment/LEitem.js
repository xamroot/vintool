import React, {Component} from 'react';

class LEitem extends Component {

	render() {
		return(
			<div className='container-lineitem'>
				<p className='items-lineitem'>
					<span onClick={this.props.del} className='delete-lineitem'><b>X</b></span>
				</p>
				<p className='items-lineitem'><b>{this.props.type}</b></p>
				<p className='items-lineitem'>Name: <b>{this.props.name}</b> </p>
				<p className='items-lineitem'>Cost: <b>${this.props.cost}</b> </p>
			</div>
		);
	}
}

export default LEitem;