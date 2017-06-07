# Video Store Consumer

In this project, you'll take a lot of the knowledge you have so far and create an end-to-end Video Store application. The final product will be something that a rental store employee might use to manage the video store where they work.

This is a [Phase 3](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md) Pair project.

## Learning Goals
- Leverage jQuery event observation along with Backbone to enable a dynamic user interface
- Organize browser interactions according to Backbone's MVC pattern
- Revisit Rails API functionality
- Project Manage your own project

This project has two main components: a Rails API and a Backbone front-end. You will be extending an existing Rails API to add some of the functionality that you require to complete the front-end implementation. You will be submitting a pull request at the end of the project for both components.

## Project Information
This project will be utilizing an external API within an API! Whoa! Your front-end implementation will be interacting with a **Rails API** that you will be modifying. The Rails API wraps an **external API** which contains many endpoints related to movies. The external API is [The Movie DB](https://www.themoviedb.org/documentation/api).

## Project Setup
### Backbone Part
- One person shall fork this repository
- Add the pair as a collaborator on the project
- Both people shall clone the repository
- Install dependencies using `$npm install`
- Start the development server using `$npm start`

### Rails Part
- One person shall fork [this]() repository
- Add the pair as a collaborate on the project
- Both people shall clone the repository
- Set up the DB using
- Ensure both people can run the API locally

### API Configuration
Follow the instructions on the API's [Getting Started](https://developers.themoviedb.org/3/getting-started) page to set up your account and request an API Key.  
  (You can use Ada's address and a fake phone # if you need to)

## Project Requirements
### Front-End
- Show a paginated collection of Movies, 10 per page
  - This will show a movie's
- Allow a user to interact with a Movie by clicking
  - When _selected_, a Movie shows more information
  - When _deselected_, a Movie returns to its default state
  - Only one movie can be selected at a time
  - Selected another movie deselects the one which was selected
- Changing the page deselects a Movie

### Back-End
You will make updates to the VideoStore API:
- Add images

## Optional Enhancements
- Sorting
  - Alter your Movies API, if necessary, to allow users to change how Movies are sorted for display
  - Add appropriate controls to this application to let a user change how Movies are sorted
- Page Size
  - Alter your Movies API, if necessary, to allow more control over how many Movies are returned per page
  - Show the appropriate number of Movies per page based on the user's device (user agent)
- Queue Sorting
  - Allow a user to sort their Queue by implementing drag-and-drop controls
