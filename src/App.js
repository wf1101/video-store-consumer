import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';
import Search from './components/Search';
import CustomerCollection from'./components/CustomerCollection';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rental from './components/Rental';
import Movie from './components/Movie';
import axios from 'axios';
import PropTypes from 'prop-types';
import Status from './components/Status';


class App extends Component {
	static propTypes = {
		updateStatusCallback: PropTypes.func,
	}

	constructor() {
		super();

		this.state = {
			movieName: "None",
			customerName: "None",
			customerID: null,
			status: {
				message: 'Loaded the page successfully',
				type: 'success'
			}
		}
	}

	updateStatus = (message, type) => {
		this.setState({
			status: {
				message: message,
				type: type
			}
		})
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


	render() {
		return (
			<Router>
				<div>
					<header>
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

						<Rental movieName={ this.state.movieName }
							customerName={ this.state.customerName }
							customerID={ this.state.customerID }
							updateStatusCallback={ this.updateStatus }
						/>
					</header>
					<section>
						<Status
							message={ this.state.status.message }
							type={ this.state.status.type }
						/>
					</section>
					<Route
						path="/search"
						render={(props) => <Search {...props}
							updateStatusCallback={ this.updateStatus }/>}
						/>

						<Route
							path="/library"
							render={(props) => <Library {...props} selectMovieCallback={ this.selectMovie }
								updateStatusCallback={ this.updateStatus }
							/> }
						/>
						<Route
							path="/customers"
							render={(props) => <CustomerCollection {...props} selectCustomerCallback={ this.selectCustomer }
								updateStatusCallback={ this.updateStatus }/>}
							/>

						</div>
					</Router>
				);
			}
		}

		export default App;
