import React from 'react';
import Customer from './Customer';
import axios from 'axios';

class CustomerCollection extends React.Component{
  constructor(){
    super();

    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/customers')
    .then((response) => {
      console.log(response);
      this.setState({ customers: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    const customerData = this.state.customers.map((customer, index) => {
      return <Customer
        key={ index }
        name={ customer.name }
        phone={ customer.phone }
      />
    })

    return(
      <div>
        { customerData }
      </div>
    )
  }
}

export default CustomerCollection;
