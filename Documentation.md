# Tee REST API Documentation

## Introduction

Welcome to the comprehensive documentation for our REST API, designed to facilitate the management of "Persons." This API empowers developers to perform a wide range of operations on person records, leveraging the power of a MongoDB database. Whether you're building a user management system, a contact book application, or any project that involves managing individuals, this API has you covered.

Our REST API adheres to industry best practices, providing a robust and flexible solution for creating, retrieving, updating, and deleting person records. In this documentation, you will find detailed information on each endpoint, request and response formats, and example use cases to help you make the most of this resource.

**Base URL:** `https://timi-REST-api.vercel.app/api`

**Authentication:** No authentication is required for using this API, ensuring seamless integration into your applications.

**Error Handling:** Our API follows standard HTTP status codes and provides clear error messages in JSON format to assist developers in identifying and resolving issues.

## Endpoints

### Create a Person

- **Endpoint**: `POST /api`
- **Description**: Create a new person record.
- **Request Body**:
  - `name` (string): Set any name
- **Response**:
  - HTTP Status Code: `201 Created`
  - Response Body: JSON representation of the created person.
- **Example Request**:

  ```http
  POST https://ayomide-rest-api.vercel.app/api
  Content-Type: application/json

  {
    "name": "OxAyomide"
  }
  ```

- **Example Response**:
  ```json
  {
    "_id": "65005f568cbc3267df66eca5",
    "name": "OxAyomide",
    "__v": 0
  }
  ```

### Read All Persons

- **Endpoint**: `GET /api`
- **Description**: Fetch details of all persons stored in the database.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON representation of all persons in the database.
- **Example Request**:
  ```http
  GET https://timi-rest-api.vercel.app/api
  ```
- **Example Response**:
  ```json
  [
    {
      "_id": "65005f568cbc3267df66eca5",
      "name": "OxAyomide",
      "__v": 0
    },
    {
      "_id": "65007d37da867095156c2ddb",
      "name": "Mark Essien",
      "__v": 0
    },
    {
      "_id": "650079b91caabc18543199e5",
      "name": "Naza",
      "__v": 0
    }
  ]
  ```

### Read a Person

- **Endpoint**: `GET /api`
- **Description**: Fetch details of a person by \_id or name. You can use query parameters to filter results.
- **Query Parameters**:
  - `name` (string): The name of the person to retrieve.
  - `_id`(a string of 24 hex characters): The \_id of the person to retrieve created by mongoDb.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON representation of the person(s) matching the query.
- **Example Request**:
  - To fetch by \_id:
    ```http
    GET /api/65005f568cbc3267df66eca5
    ```
  - To fetch by name:
    ```http
    GET /api/OxAyomide
    ```
- **Example Response**:
  ```json
  [
    {
      "_id": "65005f568cbc3267df66eca5",
      "name": "OxAyomide",
      "__v": 0
    }
  ]
  ```

### Update a Person

- **Endpoint**: `PUT /api/_id` or `PUT /api/name`
- **Description**: Modify details of an existing person by \_id or name.
- **Request Parameters**:
  - `name` (string): The name of the person to update.
- **Request Body**:
  - `name` (new string): The updated name of the person.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON representation of the updated person.
- **Example Request**:

  ```http
  PUT /api/65005f568cbc3267df66eca5
  Content-Type: application/json

  {
    "name": "OxAyomide new"
  }
  ```

  or

  ```http
  PUT /api/OxAyomide
  Content-Type: application/json

  {
  "name": "OxAyomide new"
  }
  ```

- **Example Response**:
  ```json
  {
    "_id": "65005f568cbc3267df66eca5",
    "name": "OxAyomide",
    "__v": 0
  }
  ```

### Delete a Person

- **Endpoint**: `DELETE /api/_id` or `DELETE /api/name`
- **Description**: Remove a person by \_id or name.
- **Request Parameters**:
  - `name` (string): The name of the person to delete.
  - `_id`(a string of 24 hex characters): The \_id of the person to delete created by mongoDb.
- **Response**:
  - HTTP Status Code: `200 OK`
  - Response Body: JSON object with a success message.
- **Example Request**:

  ```http
  DELETE /api/65007d37da867095156c2ddb
  ```

  or

  ```http
  DELETE /api/Mark Essien
  ```

- **Example Response**:
  ```json
  {
    "message": "Person deleted successfully"
  }
  ```

## Conclusion

Congratulations! You have successfully explored the API documentation for the REST API designed for managing persons. This API provides a range of endpoints that allow you to interact with person records in a flexible and efficient manner.

In summary, this API empowers you to:

- **Create**: Add new person records to the database.
- **Read**: Retrieve individual or all person records by \_id or name, and fetch all persons.
- **Update**: Modify details of an existing person record by \_id or name.
- **Delete**: Remove a person record by \_id or name.

The API is designed to be straightforward and easy to use, making it a valuable tool for various applications, such as user management systems, address books, and more.

If you have any questions, require additional assistance, or encounter any issues while using this API, please do not hesitate to reach out to me:

- Slack Name - Tee
- Gmail - allenkayode39@gmail.com
