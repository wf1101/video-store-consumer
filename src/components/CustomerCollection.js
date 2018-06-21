import React from 'react';
import Customer from './Customer';
import axios from 'axios';
import './CustomerCollection.css';

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
      this.props.updateStatusCallback(`Successfully loaded ${response.data.length} customers`, 'success');

      this.setState({ customers: response.data})
    })
    .catch((error) => {
			this.props.updateStatusCallback( error.message, 'error')
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
      <div className="customer-display">
        { customerData }
      </div>
    )
  }
}

export default CustomerCollection;
