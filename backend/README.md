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

# Captain API Routes

Base URL:

`/api/captain`

All captain routes are defined in `routes/captain.routes.js` and mounted in `app.js`.

| Method | Endpoint | Auth Required | Description |
| --- | --- | --- | --- |
| `POST` | `/api/captain/registerCaptain` | No | Register a new captain with vehicle details |
| `POST` | `/api/captain/loginCaptain` | No | Login an existing captain |
| `GET` | `/api/captain/captainProfile` | Yes | Get the authenticated captain profile |
| `POST` | `/api/captain/logoutCaptain` | Yes | Logout the authenticated captain |

## Authentication

Protected captain routes require the JWT token returned from captain login or registration.

Send the token in one of these ways:

- Cookie: `token=jwt_token_here`
- Header: `Authorization: Bearer jwt_token_here`

## Captain Register Body

`POST /api/captain/registerCaptain`

```json
{
  "fullname": {
    "firstname": "Amit",
    "lastname": "Kumar"
  },
  "email": "amit.captain@example.com",
  "password": "123456",
  "vehicle": {
    "color": "white",
    "plate": "DL01AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

Required fields:

- `fullname.firstname`: minimum 3 characters
- `email`: valid email address
- `password`: minimum 6 characters
- `vehicle.color`: minimum 3 characters
- `vehicle.plate`: minimum 3 characters
- `vehicle.capacity`: integer of at least 1
- `vehicle.vehicleType`: one of `car`, `motorcycle`, or `auto`

## Captain Login Body

`POST /api/captain/loginCaptain`

```json
{
  "email": "amit.captain@example.com",
  "password": "123456"
}
```

Required fields:

- `email`: valid email address
- `password`: minimum 6 characters

# Captain Registration Endpoint

## Endpoint

`POST /api/captain/registerCaptain`

## Description

This endpoint registers a new captain, hashes the password, creates the captain record with vehicle details, generates an authentication token, and returns the created captain with the token.

## Required Data

Send the request body as JSON:

```json
{
  "fullname": {
    "firstname": "Amit",
    "lastname": "Kumar"
  },
  "email": "amit.captain@example.com",
  "password": "123456",
  "vehicle": {
    "color": "white",
    "plate": "DL01AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Field Requirements

- `fullname.firstname`: required, minimum 3 characters
- `fullname.lastname`: optional
- `email`: required, must be a valid email
- `password`: required, minimum 6 characters
- `vehicle.color`: required, minimum 3 characters
- `vehicle.plate`: required, minimum 3 characters
- `vehicle.capacity`: required, must be an integer of at least 1
- `vehicle.vehicleType`: required, must be one of `car`, `motorcycle`, or `auto`

## Success Response

### `201 Created`

Returned when the captain is created successfully.

Example response:

```json
{
  "message": "Captain Regsiteration succesfully",
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Kumar"
    },
    "email": "amit.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "white",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## Error Responses

### `400 Bad Request`

Returned when validation fails or a captain with the same email already exists.

Example validation response:

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

Example duplicate captain response:

```json
{
  "message": "Captain already exist"
}
```

## Notes

- Base route is mounted in `app.js` as `/api/captain`
- The register route itself is `/registerCaptain`
- Full route becomes `/api/captain/registerCaptain`

# Captain Login Endpoint

## Endpoint

`POST /api/captain/loginCaptain`

## Description

This endpoint authenticates an existing captain with email and password, generates an authentication token, sets the token cookie, and returns the captain with the token.

## Required Data

Send the request body as JSON:

```json
{
  "email": "amit.captain@example.com",
  "password": "123456"
}
```

## Field Requirements

- `email`: required, must be a valid email
- `password`: required, minimum 6 characters

## Success Response

### `200 OK`

Returned when the captain logs in successfully.

Example response:

```json
{
  "message": "Captain login succesfully",
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Kumar"
    },
    "email": "amit.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "white",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
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
  "message": "Invalid email or password"
}
```

## Notes

- Base route is mounted in `app.js` as `/api/captain`
- The login route itself is `/loginCaptain`
- Full route becomes `/api/captain/loginCaptain`

# Captain Profile Endpoint

## Endpoint

`GET /api/captain/captainProfile`

## Description

This endpoint returns the currently authenticated captain's profile.

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
  "captian": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Kumar"
    },
    "email": "amit.captain@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "white",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
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

- Base route is mounted in `app.js` as `/api/captain`
- The profile route itself is `/captainProfile`
- Full route becomes `/api/captain/captainProfile`
- The current response key is `captian` in the controller.

# Captain Logout Endpoint

## Endpoint

`POST /api/captain/logoutCaptain`

## Description

This endpoint logs out the authenticated captain by blacklisting the current token and clearing the `token` cookie.

## Authentication

This route is protected. Send the token received from login in one of these ways:

- Cookie: `token=jwt_token_here`
- Header: `Authorization: Bearer jwt_token_here`

## Required Data

No request body is required.

## Success Response

### `200 OK`

Returned when the captain logs out successfully.

Example response:

```json
{
  "message": "Captain Logged out succesfully"
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

- Base route is mounted in `app.js` as `/api/captain`
- The logout route itself is `/logoutCaptain`
- Full route becomes `/api/captain/logoutCaptain`
