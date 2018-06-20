import React from 'react';
import Movie from './Movie.js';
import axios from 'axios';
import './Library.css';
import PropTypes from 'prop-types';

class Library extends React.Component {
	static propTypes = {
		updateStatusCallback: PropTypes.func,
		selectMovieCallback: PropTypes.func
	}

	constructor(props){
		super(props);
		this.state = {
			movies: []
		};
	}
	componentDidMount(){
		axios.get('http://localhost:3000/movies')
		.then((response) => {
			this.props.updateStatusCallback(`Successfully loaded ${response.data.length} movies`, 'success');

			this.setState({ movies: response.data})
		})
		.catch((error) => {
			this.props.updateStatusCallback( error.message, 'error')
		});
	}

	render() {
		const movieData = this.state.movies.map((movie, index) => {
			return <Movie
				key={ index }
				external_id={ movie.id }
				title={ movie.title }
				releaseDate={ movie.release_date }
				image_url={ movie.image_url }
				overview={ movie.overview }
				selectMovieCallback={ this.props.selectMovieCallback }
				buttonName="Maybe This One"
			/>
		})

		return(
			<div className="library">
				{ movieData }
			</div>
		);
	}
}

export default Library;
