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
      this.setState({
        error: error.message
      })
    });
  }
  render() {
    const customerData = this.state.customers.map((customer, index) => {
      return <Customer
        key={ index }
        name={ customer.name }
        customerID={ customer.id }
        phone={ customer.phone }
        selectCustomerCallback= { this.props.selectCustomerCallback }
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
