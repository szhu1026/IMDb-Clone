# SZIMDb

[Heroku link][heroku]

[heroku]: https://szimdb.herokuapp.com/

## Minimum Viable Product

SZIMDb is a web application inspired by IMDb that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
<!-- (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later) -->
- [ ] Movies
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Displays links to actor pages
- [ ] Actors
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Displays links to movie pages
- [ ] Comments Section for Movie and Actor Pages
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Only logged-in users can add comments
- [ ] Search functionality for Movies and Actors

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Actor and Movie Model, API, and components (3 days, W1 T 6pm)

**Objective:** Can link between Actor and Movie Pages.

- [ ] pull API data to generate pages
- [ ] test out API interaction in the console
- [ ] implement each movie component, building out the flux loop as needed.
  - [ ] `Picture`
  - [ ] `Trailer`
  - [ ] `Description`
  - [ ] `Cast`
  - [ ] `Actor`
  - [ ] `Comments`
- [ ] implement each actor component, building out the flux loop as needed.
  - [ ] `Picture`
  - [ ] `Name`
  - [ ] `Description`
  - [ ] `Filmography`
  - [ ] `Movie`
  - [ ] `Comments`
- [ ] style movie and actor components
- [ ] seed movies and actor data


### Phase 2: Search Functionality (2 days, W2 M 6pm)

**Objective:** A user can search for a movie or actor page.  Search provides links to actor/movie pages.

- Implement each search component, building out the flux loop as needed.
  - [ ] `SearchBar`
  - [ ] `Movie Tab`
  - [ ] `Actor Tab`
  - [ ] `Text Matches`
  - [ ] `Displayed Results`
  - [ ] `Displayed Result: link to actor/movie page`
- Generate routes
- Single page scrolling
- Index Page: Recommended, In Theaters

### Phase 3: Backend setup and Front End User Authentication (2 days, W2 W 6pm)

**Objective:** Functioning rails project with front-end Authentication.  Only logged in users can add comments and tags.

- [ ] create new project
- [ ] create `User` model
- [ ] authentication backend setup
- [ ] create `StaticPages` controller and root view
- [ ] set up webpack & flux scaffold with skeleton files
- [ ] setup `APIUtil` to interact with the API
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin components
- [ ] style signin/signup components
- [ ] seed data

### Phase 4: Comments Model, API, and components (2 days, W2 F 6pm)

**Objective:** Comments can be created, read, edited and destroyed through
the API.

- [ ] create `Comment` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for comments (`CommentsController`)
- [ ] jBuilder views for comments
- [ ] test out API interaction in the console.
- implement each note component, building out the flux loop as needed.
  - [ ] `CommentsIndex`
  - [ ] `CommentsIndexItem`
  - [ ] `CommentForm`
- [ ] save Comment to the DB when the form loses focus or is left idle after editing.
- [ ] style Comments components
- [ ] seed Comments

### Bonus Features (TBD)
- [ ] Tags
- [ ] Improved photo library for movies/actors
- [ ] Ratings
- [ ] Search within Castings 

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
