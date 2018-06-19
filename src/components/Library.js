import React from 'react';
import Movie from './Movie.js';
import axios from 'axios';

class Library extends React.Component {
	constructor(){
		super();
		this.state = {
			movies: []
		};
	}
	componentDidMount(){
		axios.get('http://localhost:3000/movies')
		.then((response) => {
			console.log(`library movies: ${response.data}`);
			this.setState({ movies: response.data})
		})
		.catch((error) => {
			console.log(error);
		})
	}
	render() {
		console.log(this.state.movies);
		const movieData = this.state.movies.map((movie, index) => {
			return <Movie
				key={ index }
				title={ movie.title }
				image_url={ movie.image_url }
				overview={ movie.overview }
			/>
		})

		return(
			<div>
				{ movieData }
			</div>
		)
	}
}

export default Library;
