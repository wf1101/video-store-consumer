import React from 'react';
import PropTypes from 'prop-types';
import Rental from './Rental';

class Movie extends React.Component{
	static propTypes = {
		title: PropTypes.string,
		image_url: PropTypes.string,
		overview: PropTypes.string,
		addMovieCallback: PropTypes.func,
		selectMovieCallback: PropTypes.func,
		external_id: PropTypes.number,
		release_date: PropTypes.string,
		buttonName: PropTypes.string
	}

	createMovie = () => {
		// console.log(this.props.title);
		const movie = {
			title: this.props.title,
			external_id: this.props.external_id,
			image_url: this.props.image_url,
			inventory: 5,
			release_date: this.props.release_date,
			overview: this.props.overview
		}

		this.props.addMovieCallback(movie)
	}

	selectMovieCallback = () => {
		this.props.selectMovieCallback( this.props.title )
	}

	showButton = () => {
		if (this.props.buttonName === "Maybe This One") {
			return <button onClick={ this.selectMovieCallback }>{ this.props.buttonName }</button>
		} else if (this.props.buttonName === "Add to Library") {
			return <button onClick={ this.createMovie }>{ this.props.buttonName }</button>
		}
	}

	render(){

		return(
			<div>
				<section>
					<img src={ this.props.image_url } alt='movie-poster'/>
					<h2>Name: { this.props.title }</h2>
					<p>Overview: {this.props.overview }</p>
					{ this.showButton() }
				</section>
			</div>
		)
	}
}
export default Movie;
