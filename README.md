# art-in-my-pocket-server-2


# Art in the pocket

<br>

# Quick Compo

<br>

## Description

This is an app that allows you to have the most interesting masterpieces right in your pocket. Offers you the possibility to appreciate paintings, sculptures and culture from the most beautiful museums. Besides this, you are able to store in your favorites, the pieces you like the most and organize your own art collection. Art in the pocket also gives you the possibility to see and store virtual events you want to attend.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user, I can sign up on the platform so that I can start creating my favorite's list and building my own collection.
- **Login:** As a user I can login to the platform so that I can access my profile and start creating my favorite's list and building my own collection.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit Profile page and see, update and organize my favorite's list and collections.
- **Search list:** As a logged in user I want to be able to search for the paintings, artists and objects.
- **Object details:** As a logged in user I want to be able to see the details of the painting I select from the search list and add them to either my favourite's list or collections.
- **Favorite list:** As a user, I want to add, see and delete my favorite pieces of art.
- **Collection:** As a user I want to be able to add, see and delete pieces of art that I have selected and organized as I pleased.
- **Friends list:** As a user, I want to be able to add users to my friends list, so that I can see their favorites and their own build collections.
- **Events list:** As a user, I want to be able to see and add virtual events to my events list, so that I can keep track of my future events.

## Backlog ??'?

- soquet.Io
- social login
- default profile picture - paintings
- defautl name - paintors
- desktop format

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                  | Component         | Permissions                | Behavior                                          |
| --------------------- | ----------------- | -------------------------- | ------------------------------------------------- |
| `/login`              | LoginPage         | anon only `<AnonRoute>`    | Login form, navigates to home page after login.   |
| `/signup`             | SignupPage        | anon only `<AnonRoute>`    | Signup form, navigates to home page after signup. |
| `/`                   | HomePage          | public `<Route>`           | Home page.                                        |
| `/user-profile`       | ProfilePage       | user only `<PrivateRoute>` | User and player profile for the current user.     |
| `/user-profile/edit`  | EditProfilePage   | user only `<PrivateRoute>` | Edit user profile form.                           |
| `/search`             | SearchPage        | user only `<PrivateRoute>` | Search for Artists and paintings-List.            |
| `/details/:id`        | PieceDetailsPage  | user only `<PrivateRoute>` | Details of the art pieces.                        |
| `/favorite`           | FavoritePage      | user only `<PrivateRoute>` | See and edit Favorite pieces of the current user. |
| `/collection/:id`     | CollectionPage    | user only `<PrivateRoute>` | See and edit the Colletions of the current user.  |
| `/events/:id`         | EventsPage        | user only `<PrivateRoute>` | Virtual events you can attend to.                 |
| `/events-details/:id` | EventsDetailsPage | user only `<PrivateRoute>` | Details of the Virtual events you want attend.    |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- SearchPage

- PieceDetailsPage

- FavoritePage

- CollectionPage

- DetailsPage

- EventsPage

- EventsDetailsPage
-

Components:

- Is Anon
- Is Private
- Navbar
- Add Painting
- Event

## Services => Bonus

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **User Service**

  - `userService` :
    - `.updateCurrentUser(id, userData)`
    - `.getCurrentUser()`

- **Search Service**

  - `searchService` :
    - `.addPainting`
    - `.getPainting()`
    - `.getOnePainting(id)`
    - `.deletePainting(id)`

- **User Service**

  - `userService` :

    - `.createFavorite(id)`
    - `.getFavoriteDetails(id)`

    - `userService` :
    - `.createCollection(id)`
    - `.getCollectionDetails(id)`

    - `.createEvent(id)`
    - `.getEventDetails(id)`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  UserName: { type: String, required: true },
  name: { type: String},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [ { type: Schema.Types.ObjectId, ref:'Piece' } ],
  collection: [ { type: Schema.Types.ObjectId, ref:'Collection' } ]
}
```

**Piece model**

```javascript
 {
   title: { type: String, required: true },
   author: { type: String, required: true },
   img: { type: String },
   date: { type: Number },
   nationality: { type: String },
   dimensions:  { type: String },
   rightsAndReproduction: { type: String },
   repository: { type: String}
 }
```

**Colletion model**

```javascript
 {
   title: { type: String, required: true },
   img: { type: String },
   pieces: [ { type: Schema.Types.ObjectId, ref:'Piece' } ]
    }
```

**Event model**

```javascript
 {
   title: { type: String, required: true },
   author: { type: String, required: true },
   img: { type: String },
   date: { type: Number },
   location: { type: String },
   description:  { type: String },
   attendies:  [ { type: Schema.Types.ObjectId, ref:'User' }],
 }

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                   | Request Body                | Success status | Error Status | Description                                                                                                                     |
| ----------- | --------------------- | --------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile `      | Saved session               | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`        | {userName, email, password} | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`         | {userName, password}        | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`        |                             | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/api/search`         |                             |                | 400          | Show all results                                                                                                                |
| GET         | `/api/search`     |                             |                |              | Show specific results                                                                                                           |
| POST        | `/api/favorite/:id`   | { piece model }             | 201            | 400          | Create and save a new favorite                                                                                                  |
| PUT         | `/api/favorite/:id`   | { piece model }             | 200            | 400          | edit favorite                                                                                                                   |
| DELETE      | `/api/favorite/:id`   |                             | 201            | 400          | delete favorite                                                                                                                 |
| GET         | `/api/collection/:id` |                             |                |              | show specific colletion                                                                                                         |
| POST        | `/api/collection`     | { piece model }             | 200            | 404          | add colletion                                                                                                                   |
| PUT         | `/api/collection/:id` | { piece model }             | 201            | 400          | edit collection                                                                                                                 |
| DELETE      | `/api/collection/:id` |                             | 200            | 400          | delete                                                                                                                          |
| GET         | `/events/:id`         | { events model }            |                |              | show specific colletion                                                                                                         |
| POST        | `/events`             | { events model }             | 200            | 404          | add colletion                                                                                                                   |
| PUT         | `/events/:id`         | { events model }             | 201            | 400          | edit collection                                                                                                                 |
| DELETE      | `/events/:id`         |                             | 200            | 400          | delete                                                                                                                          |

<br>

## API's

-The Metropolitan Museum of Art API

<br>

## Packages

-Toastify
-Styled Components
-React Slick

<br>

## Links

### Trello/Kanban

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Mariana Sevinate Pontes - <github-username> - <linkedin-profile-link>
```
