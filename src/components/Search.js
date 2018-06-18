import React from 'react';
import PropTypes from 'prop-types';


const {MOVIEDB_KEY} = process.env
const API_URL = 'https://api.themoviedb.org/3/search/movie?'

class Search extends React.Component{
  state = {
    query: ''
	}

	handleInputChange = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	render(){
		return(
			<form>
				<input placeholder="Find a movie" name="title" value={ this.state.query } onChange={this.handleInputChange}/>
				<input type="submit" value="Search"/>
			</form>
		)
	}
}

export default Search;
