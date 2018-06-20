import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

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

	selectMovie = () => {
		this.props.selectMovieCallback( this.props.title )
	}

	showButton = () => {
		if (this.props.buttonName === "Maybe This One") {
			return <button onClick={ this.selectMovie }>{ this.props.buttonName }</button>
		} else if (this.props.buttonName === "Add to Library") {
			return <button onClick={ this.createMovie }>{ this.props.buttonName }</button>
		}
	}

	render(){

		return(
			<div className="single-movie">
				<section>
					<h2>{ this.props.title }</h2>
					<img src={ this.props.image_url } alt='movie-poster'/>
					{ this.showButton() }
					<p className="overview">Overview<span className="overview-text">{this.props.overview }</span></p>
				</section>
			</div>
		)
	}
}
export default Movie;
