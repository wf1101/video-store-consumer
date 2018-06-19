import React from 'react';
import PropTypes from 'prop-types';

class Movie extends React.Component{
	static propTypes = {
		title: PropTypes.string,
		image_url: PropTypes.string,
		overview: PropTypes.string,
		addMovieCallback: PropTypes.func,
		external_id: PropTypes.number,
		release_date: PropTypes.string
	}

	createMovie = () => {
		console.log(this.props.title);
		const movie = {
			title: this.props.title,
			external_id: this.props.external_id,
			image_url: this.props.image_url,
			inventory: 5,
			release_date: Date.parse(this.props.release_date),
			overview: this.props.overview
		}

		this.props.addMovieCallback(movie)

	}


	render(){
		let btn = ''
		if (this.props.addMovieCallback) {
			btn = 'Add to library'
		} else {
			btn = 'Select movie'
		}
		return(
			<section>
				<button onClick={ this.createMovie }>{ btn }</button>
				<img src={ this.props.image_url } alt='movie-poster'/>
				<h2>Name: { this.props.title }</h2>
				<p>Overview: {this.props.overview }</p>
			</section>
		)
	}
}
export default Movie;
