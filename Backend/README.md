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


## API Endpoints

### Get User Profile

**URL:** `/users/profile`

**Method:** `GET`

**Auth required:** Yes

**Permissions required:** None

**Description:** Retrieves the authenticated user's profile information.

**Request Headers:**
- `Authorization: Bearer <token>` (if using header for token)

**Response:**

- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "firstname": "First Name",
      "lastname": "Last Name",
      "email": "user@example.com",
      // other user fields
    }
  }
  ```

### Register Captain

**URL:** `/captains/register`

**Method:** `POST`

**Auth required:** No

**Permissions required:** None

**Description:** Registers a new captain with the provided details.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "First Name",
    "lastname": "Last Name"
  },
  "email": "captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Response:**

- **Success**:
  - **Status Code**: `201 Created`
  - **Body**:
    ```json
    {
      "token": "jwt_token",
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "First Name",
          "lastname": "Last Name"
        },
        "email": "captain@example.com",
        "password": "hashed_password",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        },
        "status": "inactive",
        "location": {
          "lat": null,
          "lng": null
        }
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
        },
        {
          "msg": "color must be atleast 3 character long",
          "param": "vehicle.color",
          "location": "body"
        },
        {
          "msg": "plate must be atleast 3 character long",
          "param": "vehicle.plate",
          "location": "body"
        },
        {
          "msg": "capacity must be a number",
          "param": "vehicle.capacity",
          "location": "body"
        },
        {
          "msg": "Invalid vehicle type",
          "param": "vehicle.vehicleType",
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

### POST /captains/login

Logs in an existing captain.

#### Request

- **URL**: `/captains/login`
- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "captain@example.com",
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
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "First Name",
          "lastname": "Last Name"
        },
        "email": "captain@example.com",
        "password": "hashed_password",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        },
        "status": "inactive",
        "location": {
          "lat": null,
          "lng": null
        }
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

### GET /captains/profile

Retrieves the authenticated captain's profile information.

#### Request

- **URL**: `/captains/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

#### Response

- **Success**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "captain": {
        "_id": "captain_id",
        "fullname": {
          "firstname": "First Name",
          "lastname": "Last Name"
        },
        "email": "captain@example.com",
        "password": "hashed_password",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        },
        "status": "inactive",
        "location": {
          "lat": null,
          "lng": null
        }
      }
    }
    ```

- **Authentication Error**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "unauthorized"
    }
    ```

### GET /captains/logout

Logs out the authenticated captain.

#### Request

- **URL**: `/captains/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization: Bearer <token>`

#### Response

- **Success**:
  - **Status Code**: `200 OK`
  - **Body**:
    ```json
    {
      "message": "Logout Successfully"
    }
    ```

- **Authentication Error**:
  - **Status Code**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "message": "unauthorized"
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

2. Use the appropriate endpoints with the required data in the request body or headers.