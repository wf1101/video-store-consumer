import React from 'react';
import Movie from './Movie.js';
import axios from 'axios';
import './Library.css';

class Library extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			movies: []
		};
	}
	componentDidMount(){
		axios.get('http://localhost:3000/movies')
		.then((response) => {
			this.setState({ movies: response.data})
		})
		.catch((error) => {
		  this.setState({ error: error.message })
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
			<div>
				{ movieData }
			</div>
		);
	}
}

export default Library;
