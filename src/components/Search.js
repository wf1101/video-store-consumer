import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie.js';
import './Search.css';


class Search extends React.Component{
	static propTypes = {
		updateStatusCallback: PropTypes.func,
	}

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
			this.props.updateStatusCallback(`Found ${response.data.length} results for ${ searchTerm }`, 'success');
			this.setState({
				movies: response.data
			})
		})
		.catch((error) => {
			this.props.updateStatusCallback( error.message, 'error')
		});
	}

	onFormSubmit = (event) => {
		event.preventDefault();

		this.listMovies(this.state.query);
	}

	addMovie = (movie) => {
		axios.post('http://localhost:3000/movies', movie)
		.then((response) => {
			this.props.updateStatusCallback(`Successfully added movie ${ movie.title }`, 'success');
		})
		.catch((error) => {
			this.props.updateStatusCallback( error.message, 'error')
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
				buttonName="Add to Library"
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
