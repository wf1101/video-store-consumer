# Video Store Consumer

In this project, you'll take a lot of the knowledge you have so far and create an end-to-end Video Store application. The final product will be something that a rental store employee might use to manage the video store where they work.

This is a [Phase 3](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md) Pair project.

## Learning Goals

- Use React to build a dynamic and attractive user interface
- Organize the behavior of a complex SPA
- Independently research and integrate a new technology
- Remember how Rails works
- Own both ends of an API
- Practice project management skills in prioritizing features and determining deliverables

This project has two main components: a Rails API and a React front-end. You will be extending an existing Rails API to add some of the functionality that you require to complete the front-end implementation. You will be submitting a pull request at the end of the project for both components.

## Problem Statement

Our rental store employees want to be able to manage their rental inventory. They want to be able to search through all movies and pick and choose which movies they want to add to their rental library. They want to be able to manage their rental library. We will be using an external API to build in searching for *all movies*. We will use our existing Rails API to manage the *rental library*.

## Project Information

This project will be utilizing an external API within an API! Whoa! Your front-end implementation will be interacting with a **Rails API** that you will be modifying. The Rails API wraps an **external API** which contains many endpoints related to movies. The external API is [The Movie DB](https://www.themoviedb.org/documentation/api).

## Project Setup

### 1. React Front-End

- One partner shall:
  - Fork this repository
  - Add the pair as a collaborator on the project
  - Clone the repository
  - Use `create-react-app` to generate React scaffolding
  - Commit and push the generated files
- The other partner shall then:
  - Clone the repository (without forking)
  - Install dependencies using `$npm install`
- Both partners shall then
  - Start the development server using `npm start`
  - Start the test watcher using `npm test`

### 2. External API Configuration

- Follow the instructions on the API's [Getting Started](https://developers.themoviedb.org/3/getting-started) page to set up your account and request an API Key.   You can use Ada's address in the registration process.
- Read through the documentation and use POSTman to investigate the API. A few endpoints you may want to explore include:
  - [Search Movies](https://developers.themoviedb.org/3/search/search-movies)
  - [Get Movie Details](https://developers.themoviedb.org/3/movies/get-movie-details)
  - [Configuration](https://developers.themoviedb.org/3/configuration/get-api-configuration)

### 3. Rails API

- One person shall fork the API repository. You can find it at your cohort's GitHub org, and the project's name is VideoStoreConsumer-API. You should immediately notice that this is a Rails project not a React project.
- Add the pair as a collaborator on the project
- Both people shall clone the repository
- Run `bundle install`, `rails db:setup`, etc
- Set up the `.env` file with the API key from step #2
- Ensure both people can run the API locally

## Project Requirements

### Front-End

A rental store employee should be able to...
- search for a movie from the external API
  - add a movie from the search results to the rental library
- list all movies in the rental library
  - "select" a movie from the library
- list all customers
  - "select" a customer
- check out the selected movie for the selected customer

#### The React Router

Your front-end should use the [React Router](https://reacttraining.com/react-router/). You will need to research this as a pair!
- What problem does it solve?
- How do you install it?
- How do you use it?

Your front-end should have at least the following routes:

- `/` (splash screen)
- `/search` (search for a movie from the external API)
- `/library` (list movies in the rental library)
- `/customers` (list customers)

You can have more if you want (for example `/customers/:id`), but ultimately the design of your user interface is up to you.

### Back-End
- The search functionality is already implemented!
- Add support for adding an external movie to the rental library

<!--
- Show a paginated collection of Movies, 10 per page
  - This will show a movie's
- Allow a user to interact with a Movie by clicking
  - When _selected_, a Movie shows more information
  - When _deselected_, a Movie returns to its default state
  - Only one movie can be selected at a time
  - Selected another movie deselects the one which was selected
- Changing the page deselects a Movie -->

## Project Design
### Front-End
- Consider what Backbone models, collections and views you will need to utilize
- Consider what events you will want to handle
- Consider how you will make requests from the front-end to the API

### Back-End
- Investigate the existing implementation to gain an understanding of what you are working with
- Consider what data the back-end will require to complete the tasks in the requirements

## Optional Enhancements
Some of these optional requirements require work in the front-end only, back-end only or both.

- Deploy your front-end to GitHub Pages, and your back-end to AWS
- Set up TravisCI for continuous integration on your back-end
- Add a detail page for a customer to see the movies they have checked out. Overdue movies should be highlighted.
- Be able to check in movies from the customer details page
- Full CRUD for customers
- Introduce scrolling pagination to dynamically load more movies when scrolling to the bottom (research!!)
