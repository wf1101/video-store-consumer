import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';

class Search extends React.Component{
	state = {
		query: '',
		movies: []
	}

	handleInputChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	listMovies(searchTerm) {
		axios.get(`http://localhost:3000/movies/?query=${searchTerm}`)
		.then((response) => {
			this.setState({
				movies: response.data
			})
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		this.listMovies(this.state.query);
	}

	addMovie = (movie) => {
		axios.post('http://localhost:3000/movies', movie)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
      console.log(error);
		});
	}

	render(){
		const movieList = this.state.movies.map((movie, index) => {
			return <Movie
				key={index}
				title={ movie.title }
				external_id={ movie.external_id }
				image_url={ movie.image_url }
				overview={ movie.overview }
				release_date={ movie.release_date }
				addMovieCallback= { this.addMovie }
			/>
		})

		return(
			<div>
				<form onSubmit={ this.onFormSubmit }>
					<input placeholder="Find a movie" name="title" value={ this.state.query } onChange={this.handleInputChange}/>
					<input type="submit" value="Search"/>
				</form>
				<section>
					{ movieList }
				</section>
			</div>
		)
	}
}

export default Search;
