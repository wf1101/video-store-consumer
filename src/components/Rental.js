import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Rental.css';

class Rental extends React.Component{

	static propTypes = {
		movieName: PropTypes.string,
		customerName: PropTypes.string,
		createRentalCallback: PropTypes.func,
		updateStatusCallback: PropTypes.func,
		customerID: PropTypes.number
	}

	createRental = () => {
		const urlBase = "http://localhost:3000/rentals/";
		const today = new Date();
		const due_date = new Date().setDate(today.getDate()+7);
		const newRental = {
			customer_id: this.props.customerID,
			checkout_date: `${today}`,
			due_date: `${new Date(due_date)}`,
			returned: false
		};

		axios.post(`${urlBase}${this.props.movieName}/check-out`, newRental)
		.then((response) => {
			this.props.updateStatusCallback(
				`Successfully checked out ${this.props.movieName} to ${this.props.customerName}`, 'success');
			})
			.catch((error) => {
				this.props.updateStatusCallback( error.message, 'error')
			});
		}

		render(){
			return (
				<div className="rental-container">
					<span className="label">Selected Movie</span>
					<span>{this.props.movieName}</span>
					<span className="label">Selected Customer</span>
					<span>{this.props.customerName}</span>
					<span>
            <button onClick={ this.createRental }>Rent Now</button>
          </span>
				</div>
			)
		}
	}

	export default Rental;
