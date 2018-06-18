import React from 'react';
import PropTypes from 'prop-types';

class Customer extends React.Component{
	static propTypes = {
		name: PropTypes.string,
		phone: PropTypes.string
	}

	render(){
		return(
			<section>
				<h5>Name: { this.props.name }</h5>
				<h5>Phone: { this.props.phone }</h5>
			</section>
		)
	}
}
export default Customer;
