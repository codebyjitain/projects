# Backend API Documentation

### POST /users/register

Registers a new user.

#### Request

- **URL**: `/users/register`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### Response

- **Success**:
  - **Status Code**: `201`
  - **Body**:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "hashed_password",
        "socketId": null
      }
    }
    ```

- **Validation Error**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "first name must be atleast 3 character long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 6 character long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **Server Error**:
  - **Status Code**: `500 Internal Server Error`
  - **Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## How to Use

1. Ensure the server is running by executing:
   ```sh
   npm start
   ```

2. Send a `POST` request to `/users/register` with the required data in the request body.

## Required Data

- `fullname.firstname`: A string with a minimum length of 3 characters.
- `fullname.lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### POST /users/login

Logs in an existing user.

#### Request

- **URL**: `/users/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### Response

- **Success**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "hashed_password",
        "socketId": null
      }
    }
    ```

- **Validation Error**:
  - **Status Code**: `400 Bad Request`
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid Email",
          "param": "email",
          "location": "body"
        },
        {
          "msg": "Password must be atleast 6 character long",
          "param": "password",
          "location": "body"
        }
      ]
    }
    ```

- **Authentication Error**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "Invalid Email or Password"
    }
    ```

- **Server Error**:
  - **Status Code**: `500 Internal Server Error`
  - **Body**:
    ```json
    {
      "message": "Internal Server Error"
    }
    ```

## How to Use

1. Ensure the server is running by executing:
   ```sh
   npm start
   ```

2. Send a `POST` request to `/users/login` with the required data in the request body.

## Required Data

- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.