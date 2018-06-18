import React, { Component } from 'react';
import './App.css';
import Library from './components/Library';
import Search from './components/Search';
import CustomerCollection from'./components/CustomerCollection';
import { BrowserRouter } from 'react-router-dom';
import { Route} from 'react-router';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				{/* here's a div */}
				<div>
					<Route path="/search" component={ Search }/>
					<Route path="/library" component={ Library }/>
					<Route path="/customers" component={ CustomerCollection }/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
