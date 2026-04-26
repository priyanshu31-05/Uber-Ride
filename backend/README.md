# User Registration Endpoint

## Endpoint

`POST /api/users/register`

## Description

This endpoint registers a new user, hashes the password, creates the user record in the database, generates an authentication token, and returns the created user with the token.

## Required Data

Send the request body as JSON:

```json
{
  "fullname": {
    "firstname": "Rahul",
    "lastname": "Sharma"
  },
  "email": "rahul@example.com",
  "password": "123456"
}
```

## Field Requirements

- `fullname.firstname`: required, minimum 3 characters
- `fullname.lastname`: optional
- `email`: required, must be a valid email
- `password`: required, minimum 3 characters

## Success Response

### `201 Created`

Returned when the user is created successfully.

Example response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "Rahul",
      "lastname": "Sharma"
    },
    "email": "rahul@example.com"
  }
}
```

## Error Responses

### `400 Bad Request`

Returned when validation fails, such as:

- invalid email format
- missing `fullname.firstname`
- missing password
- field values shorter than allowed length

Example response:

```json
{
  "error": [
    {
      "msg": "Invalid Email",
      "path": "email"
    }
  ]
}
```

## Notes

- Base route is mounted in `app.js` as `/api/users`
- The register route itself is `/register`
- Full route becomes `/api/users/register`

# User Login Endpoint

## Endpoint

`POST /api/users/login`

## Description

This endpoint authenticates an existing user with email and password, generates an authentication token, and returns the user with the token.

## Required Data

Send the request body as JSON:

```json
{
  "email": "rahul@example.com",
  "password": "123456"
}
```

## Field Requirements

- `email`: required, must be a valid email
- `password`: required, minimum 3 characters

## Success Response

### `200 OK`

Returned when the user logs in successfully.

Example response:

```json
{
  "message": "Login succesfully",
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "Rahul",
      "lastname": "Sharma"
    },
    "email": "rahul@example.com"
  }
}
```

## Error Responses

### `400 Bad Request`

Returned when validation fails, such as:

- invalid email format
- missing password
- password shorter than allowed length

Example response:

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "path": "email"
    }
  ]
}
```

### `401 Unauthorized`

Returned when the email does not exist or the password is incorrect.

Example response:

```json
{
  "message": "invalid email or password"
}
```

## Notes

- Base route is mounted in `app.js` as `/api/users`
- The login route itself is `/login`
- Full route becomes `/api/users/login`

# User Profile Endpoint

## Endpoint

`GET /api/users/getProfile`

## Description

This endpoint returns the currently authenticated user's profile.

## Authentication

This route is protected. Send the token received from login in one of these ways:

- Cookie: `token=jwt_token_here`
- Header: `Authorization: Bearer jwt_token_here`

## Required Data

No request body is required.

## Success Response

### `200 OK`

Returned when the token is valid.

Example response:

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "Rahul",
    "lastname": "Sharma"
  },
  "email": "rahul@example.com"
}
```

## Error Responses

### `401 Unauthorized`

Returned when the token is missing, invalid, or expired.

Example response:

```json
{
  "message": "Unauthorize"
}
```

## Notes

- Base route is mounted in `app.js` as `/api/users`
- The profile route itself is `/getProfile`
- Full route becomes `/api/users/getProfile`

# User Logout Endpoint

## Endpoint

`POST /api/users/logout`

## Description

This endpoint logs out the authenticated user by clearing the `token` cookie.

## Authentication

This route is protected. Send the token received from login in one of these ways:

- Cookie: `token=jwt_token_here`
- Header: `Authorization: Bearer jwt_token_here`

## Required Data

No request body is required.

## Success Response

### `200 OK`

Returned when the user logs out successfully.

Example response:

```json
{
  "message": "Logged out successfully"
}
```

## Error Responses

### `401 Unauthorized`

Returned when the token is missing, invalid, or expired.

Example response:

```json
{
  "message": "Unauthorize"
}
```

## Notes

- Base route is mounted in `app.js` as `/api/users`
- The logout route itself is `/logout`
- Full route becomes `/api/users/logout`
