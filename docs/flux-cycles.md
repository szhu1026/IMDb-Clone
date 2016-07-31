# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.

## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. stores in `_currentUser` in `CurrentUserStore`
* `removeCurrentUser`
  0. invoked from an API callback
  0. removes `_currentUser` in `CurrentUserStore`

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. sets `form` and `_errors` in the `ErrorStore`
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. removes `_errors` for a given `form` in the `ErrorStore`

## Movie Cycles


### Movie API Request Actions

* `fetchMovie`
  0. invoked from `ActorCastingItem`, `SearchComponent`,  `HotMovies`,  
  `InTheatres` 'onClick'
  0. `3/movie/{id}?api_key=50a303126fa608b8780f3e3caaf4695a` is called for api
  0. `receiveMovie` is set as the success callback.

* `fetchMovieCasting`
  0. invoked from `ActorCastingItem`, `SearchComponent`,  `HotMovies`,  
  `InTheatres` 'onClick'
  0. `3/movie/{id}/credits?api_key=50a303126fa608b8780f3e3caaf4695a` is called for api
  0. `receiveMovieCasting` is set as the success callback.

* `fetchHotMovies`
  0. invoked from main page
  0. `3/discover/movie?sort_by=popularity.desc&api_key=50a303126fa608b8780f3e3caaf4695a` is called for api
  0. `receiveHotMovies` is set as the success callback.

* `fetchNowPlaying`
  0. invoked from main page
  0. `3/movie/now_playing?&api_key=50a303126fa608b8780f3e3caaf4695a` is called for api
  0. `receiveNowPlaying` is set as the success callback.

### Movies API Response Actions

* `receiveMovie`
  0. invoked from an API callback.
  0. `Movie` store updates `_movies` and emits change.

* `receiveMovieCasting`
  0. invoked from an API callback.
  0. `Movie` store updates `_castings` and emits change.

* `receiveHotMovies`
  0. invoked from an API callback.
  0. `Movie` store updates `_movies` and emits change.

* `receiveNowPlaying`
  0. invoked from an API callback.
  0. `Movie` store updates `_movies` and emits change.

### Movie Listeners

* `MoviePage` component listens to `Movie` store.
* `Hot Movies` component listens to `Movie` store.
* `Now Playing` component listens to `Movie` store.

## Actor Cycles

### Actor API Request Actions

* `fetchActor`
  0. invoked from `MovieCastingItem`, `SearchComponent`
  0. `3/person/{id}?api_key=50a303126fa608b8780f3e3caaf4695a` is called for api
  0. `receiveActor` is set as the success callback.

* `fetchActorCasting`
  0. invoked from `MovieCastingItem`, `SearchComponent`
  0. `3/person/{id}/credits?api_key=50a303126fa608b8780f3e3caaf4695a` is called for api
  0. `receiveActorCasting` is set as the success callback.

### Actor API Response Actions

* `receiveActor`
  0. invoked from an API callback.
  0. `Actor` store updates `_actor` and emits change.

* `receiveMovieCasting`
  0. invoked from an API callback.
  0. `Actor` store updates `_castings` and emits change.

### Movie Listeners

* `ActorPage` component listens to `Actor` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when there is text
  0. `/3/search/movie?query={hi}` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the success callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
