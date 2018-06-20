import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';

class Customer extends React.Component{
	static propTypes = {
		name: PropTypes.string,
		customerID: PropTypes.number,
		phone: PropTypes.string,
		selectCustomerCallback: PropTypes.func
	}

	selectCustomerCallback = () => {
		this.props.selectCustomerCallback(this.props.name, this.props.customerID);
	}

	render(){
		return(
			<section>
				<h5>Name: { this.props.name }</h5>
				<h5>Phone: { this.props.phone }</h5>
				<button onClick={ this.selectCustomerCallback}>Select Customer</button>
			</section>
		)
	}
}
export default Customer;
