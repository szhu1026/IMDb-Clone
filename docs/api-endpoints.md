# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Movies

### Actors

### Comments

- `GET /api/movie/:id/comments`
- `GET /api/actor/:id/comments`
- `POST /api/movie/:id/comments`: add movie comment
- `POST /api/actor/:id/comments`: add actor comment
- `DELETE /api/movie/:id/comments/:comment_id`: remove movie comment belonging to user
- `DELETE /api/actor/:id/comments/:comment_id`: remove actor comment belonging to user
