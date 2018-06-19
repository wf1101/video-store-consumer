import React from 'react';
import PropTypes from 'prop-types';

class Rental extends React.Component{
  constructor() {
    super();

    this.state = {
      movieName: "None",
      customerName: "None"
    }
  }

  static propTypes = {
    movieName: PropTypes.string,
    customerName: PropTypes.string
  }

  createRental = (event) =>{
    event.preventDefault();

  }

  componentDidUpdate(prevProps) {
    if (this.props.movieName !== prevProps.movieName) {
      this.setState({movieName: this.props.movieName})
    }
  }

  render(){
    const selectedMovie = this.state.movieName

    const selectedCustomer = this.state.customerName

    return (
      <div>
        <h3>Selected Movie</h3>
        <p>{selectedMovie}</p>
        <h3>Selected Customer</h3>
        <p>{selectedCustomer}</p>
      </div>
    )
  }
}

export default Rental;
