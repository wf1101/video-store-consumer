import React from 'react';
import PropTypes from 'prop-types';
import './Status.css';

class Status extends React.Component {
	state = {
    display: true
	}

	hideStatus = (event) => {
    this.setState({display: false})
	}

	static propTypes = {
		message: PropTypes.string.isRequired,
		type: PropTypes.string
	}
	render() {

		return(
			<section className={ `status ${this.props.type} ${this.state.display}`}>
				{ this.props.message }
				<button onClick={ this.hideStatus }>X</button>
			</section>
		)
	}
}

export default Status;
