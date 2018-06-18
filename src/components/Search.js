import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';

const MOVIEDB_KEY = process.env.REACT_APP_MOVIEDB_KEY;
const API_URL = 'https://api.themoviedb.org/3/search/movie';

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

	listMovies() {
		axios.get(`${API_URL}?api_key=${MOVIEDB_KEY}&query=${this.state.query}`)
		.then((response) => {
			console.log(response.data);
			this.setState({
				movies: response.data.results.slice(0, 20)
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		console.log("event");
    this.listMovies();
	}

	render(){
		const imageUrl = 'https://image.tmdb.org/t/p/w300'

		const movieList = this.state.movies.map((movie, index) => {
			return <Movie
				key={ index }
				title={ movie.title }
				image_url={ imageUrl + movie.poster_path }
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
