# Video Store Consumer

In this project, you'll create a single-page application that allows the user to interact with a library of movies. The final product will be something like the interface used at the RedBox kiosk or on Netflix.

This is a [Phase 2](https://github.com/Ada-Developers-Academy/pedagogy/blob/master/rule-of-three.md) Individual project.

## Learning Goals
- Explore asynchronous HTTP requests in the browser
- Leverage jQuery event observation along with Backbone to enable a dynamic user interface
- Organize browser interactions according to Backbone's MVC pattern

## Project Information
This project will be utilizing an external API. You have two options for which external API you would like to use. We will primarily be using the `/movies` endpoint.

*Your API*: We previously created a Video Store API in Rails. You will need to deploy this application to Heroku and utilize this as your API.

*Our API*: We have created our own implementation of the Video Store API deployed [here](). You may use this if you don't want to use your own Rails implementation.

## Project Setup
- Fork and clone this repository
- Install dependencies using `$npm install`
- Start the development server using `$npm start`
- Deploy your Video Store API to Heroku

## Project Requirements
### Primary View
- Show a paginated collection of Movies, 10 per page
  - This will show a movie's
- Allow a user to interact with a Movie by clicking
  - When _selected_, a Movie shows more information
  - When _deselected_, a Movie returns to its default state
  - Only one movie can be selected at a time
  - Selected another movie deselects the one which was selected
- Changing the page deselects a Movie

### Queue View


## Optional Enhancements
- Sorting
  - Alter your Movies API, if necessary, to allow users to change how Movies are sorted for display
  - Add appropriate controls to this application to let a user change how Movies are sorted
- Page Size
  - Alter your Movies API, if necessary, to allow more control over how many Movies are returned per page
  - Show the appropriate number of Movies per page based on the user's device (user agent)
- Queue Sorting
  - Allow a user to sort their Queue by implementing drag-and-drop controls
