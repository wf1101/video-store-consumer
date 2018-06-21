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
			<div className="single-customer">
				<section>
					<h2>{ this.props.name }</h2>
					<img src={require("../images/penguin.png")}/>
					<h3>{ this.props.phone }</h3>
					<button onClick={ this.selectCustomerCallback}>Select Customer</button>
				</section>
			</div>
		)
	}
}
export default Customer;
