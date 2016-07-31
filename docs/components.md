## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navbar
  * Search
    * Movie Item
    * Actor Item
  * Hot Movies
  * In Theatres
* **Actor**
  * Navbar
  * Search
  * Base Component
    * Picture
    * Name
    * DOB
    * Place of birth
    * Description
  * Castings
    * Casting Item
  * Comments
    * Sign In
    * Sign Up
    * Comment Item
    * New Comment
* **Movie**
  * Navbar
  * Search
  * Base Component
    * Picture
    * Title
    * Rating
    * Trailer Link
    * Description
  * Castings
    * Casting Item
  * Comments
    * Sign In
    * Sign Up
    * Comment Item
    * New Comment


## Routes

* **component:** `App` **path:** `/`
  * **component:** `Search` **path:** `search`
  * **component:** `Hot Movies` **path:** `hotmovies`
  * **component:** `In Theatres` **path:** `intheatres`  
  * **component:** `Movie` **path:** `movies/:movieId`
    * **component:** `MovieCasting` **path:** `movies/:movieId/casting`
    * **component:** `MovieCasting` **path:** `movies/:movieId/comments`
  * **component:** `Actor` **path:** `actors/:actorId`
    * **component:** `ActorCasting` **path:** `actors/:actorId/casting`
    * **component:** `ActorCasting` **path:** `actors/:actorId/comments`
