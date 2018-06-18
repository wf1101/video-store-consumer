import React from 'react';
import PropTypes from 'prop-types';

class Movie extends React.Component{
	static propTypes = {
		title: PropTypes.string,
		image_url: PropTypes.func
	}

	render(){
		return(
			<section>
				<img src={this.props.image_url} alt='movie-poster'/>
				<h2>Name: { this.props.title }</h2>
			</section>
		)
	}
}
export default Movie;
