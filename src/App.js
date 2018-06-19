import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';
import Search from './components/Search';
import CustomerCollection from'./components/CustomerCollection';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/search">Search</Link>
						</li>
						<li>
							<Link to="/library">Library</Link>
						</li>
						<li>
							<Link to="/customers">Customers</Link>
						</li>
					</ul>
					<Route path="/search" component={ Search }/>
					<Route path="/library" component={ Library }/>
					<Route path="/customers" component={ CustomerCollection }/>
				</div>
			</Router>
		);
	}
}

export default App;
