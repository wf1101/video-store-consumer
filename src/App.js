import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';
import Search from './components/Search';
import CustomerCollection from'./components/CustomerCollection';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rental from './components/Rental';
import Movie from './components/Movie';



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
		console.log(this.state.movieName)
		console.log(this.state.customerName)
		console.log(this.state.customerID)
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
					<Route path="/library" render={(props) => <Library {...props} selectMovieCallback={ this.selectMovie }/> } />
					<Route path="/customers" render={(props) => <CustomerCollection {...props} selectCustomerCallback={ this.selectCustomer }/>}
					/>

				</div>
			</Router>
		);
	}
}

export default App;
