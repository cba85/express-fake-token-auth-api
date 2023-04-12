# Express Fake Token Auth API

A fake Token Authentication API using Express.js (node).

This API just check the format of parameters but don't check their values.

It means you can use any username, email, password and bearer token.

## Install

```sh
$ npm install
```

## Usage

```sh
$ npm run dev
```

## Routes

### Home

```sh
GET /
```

#### Responses

| Status Code |	Description |
| --- | --- |
| 200 | OK |

HTML

### Login

```sh
POST /login
```

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | **Required**. **Valid email**. Email address    |
| `password`| `string` | **Required**. **Min length: 8** Password |

#### Responses

| Status Code |	Description |
| --- | --- |
| 200 | OK |

Object

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`   | `integer` | User ID    |
| `username`   | `string` | Username    |
| `email`| `string` | User email address |
| `token` | `string` | Authentication token |

#### Errors

| Status Code |	Description |
| --- | --- |
| 401 | Unauthorized |
| 422 |  Unprocessable Entity |

### Register

```sh
POST /register
```

#### Request Body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username`   | `string` | **Required**. Username    |
| `email`   | `string` | **Required**. **Valid email**. Email address    |
| `password`| `string` | **Required**. **Min length: 8** Password |

#### Responses

| Status Code |	Description |
| --- | --- |
| 201 | Created |

Object

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`   | `integer` | User ID    |
| `username`   | `string` | Username    |
| `email`| `string` | User email address |
| `token` | `string` | Authentication token |

#### Errors

| Status Code |	Description |
| --- | --- |
| 422 |  Unprocessable Entity |

### Me

```sh
GET /me
```

#### Request headers

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization`   | `string` | **Required**. Bearer token    |

#### Responses

| Status Code |	Description |
| --- | --- |
| 200 | Ok |

Object

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`   | `integer` | User ID    |
| `username`   | `string` | Username    |
| `email`| `string` | User email address |
| `token` | `string` | Authentication token |

#### Errors

| Status Code |	Description |
| --- | --- |
| 401 |  Unauthorized |
| 422 |  Unprocessable Entity |

### Logout

```sh
POST /logout
```

#### Request headers

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization`   | `string` | **Required**. Bearer token    |

#### Responses

| Status Code |	Description |
| --- | --- |
| 204 | No Content |

#### Errors

| Status Code |	Description |
| --- | --- |
| 401 |  Unauthorized |
| 422 |  Unprocessable Entity |
