import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';
import Search from './components/Search';
import CustomerCollection from'./components/CustomerCollection';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rental from './components/Rental';
import Movie from './components/Movie';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();

		this.state = {
			movieName: "None",
			customerName: "None",
			customerID: ""
		}
	}

	selectMovie = (title) => {
    this.setState({
			movieName: title
		});
	}

	selectCustomer = (name, id) => {
		this.setState({
			customerName: name,
			customerID: id
		});
	}

	createRental = () => {
		const urlBase = "http://localhost:3000/rentals/";
		const today = new Date();
		const due_date = new Date().setDate(today.getDate()+7);
		const newRental ={
			customer_id: this.state.customerID,
			checkout_date: `${today}`,
			due_date: `${new Date(due_date)}`,
			returned: false
		};
    console.log(newRental);
		console.log(typeof newRental.due_date);
		axios.post(`${urlBase}${this.state.movieName}/check-out`, newRental)
		.then((response) => {
      console.log(response);
		})
		.catch((error) => {

		});

	}

	render() {
		return (
			<Router>
				<div>
					<ul className="navigation">
						<li>
							<Link to="/"><img src={require("./images/house.png")}/></Link>
						</li>
						<li>
							<Link to="/search"><img src={require("./images/search.png")}/></Link>
						</li>
						<li>
							<Link to="/library"><img src={require("./images/video.png")}/></Link>
						</li>
						<li>
							<Link to="/customers"><img src={require("./images/customers.png")}/></Link>
						</li>
					</ul>
					<h5>Selected Movie: { this.state.movieName }</h5>
					<h5>Selected Customer: { this.state.customerName }</h5>
					<button onClick={ this.createRental }>Rent Now</button>
					<Route path="/search" component={ Search }/>
					<Route
						path="/library"
						render={(props) => <Library {...props} selectMovieCallback={ this.selectMovie }/> } />
					<Route
						path="/customers"
						render={(props) => <CustomerCollection {...props} selectCustomerCallback={ this.selectCustomer }/>}
					/>

				</div>
			</Router>
		);
	}
}

export default App;
