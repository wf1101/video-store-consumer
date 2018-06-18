import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './components/Library';
import CustomerCollection from'./components/CustomerCollection';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Library />
       <CustomerCollection />
      </div>
    );
  }
}

export default App;
