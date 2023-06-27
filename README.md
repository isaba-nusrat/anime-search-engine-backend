# anime-search-engine-backend

## Authentication Server with Express.js

This repository contains a simple authentication server implemented using Express.js, JWT (JSON Web Tokens), and bcrypt for password hashing. The server provides endpoints for user sign up and sign in, generating a token upon successful authentication.

### Features

- User registration: Users can sign up by providing a unique username and password. The server checks if the username already exists and returns an error if it does.
- User authentication: Users can sign in by providing their username and password. The server verifies the credentials and returns an authentication token upon successful login.
- Token-based authentication: JWT (JSON Web Tokens) are used to generate and validate authentication tokens. The tokens are signed using a secret key, ensuring their authenticity.
- Basic password hashing: Passwords are hashed using bcrypt, a secure password-hashing algorithm. This ensures that even if the server is compromised, user passwords remain protected.
- CORS support: Cross-Origin Resource Sharing (CORS) is enabled, allowing the server to handle requests from different origins.
- Environment variable configuration: The server supports environment variables for configuration, allowing for easy customization of settings such as the secret key.

### Prerequisites

Before running the server, ensure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.


### Usage

1. Start the server by running `npm start` in the project directory.
2. The server will be running on `http://localhost:3000`.

### API Endpoints

- **POST /api/signup** - Register a new user.
  - Request body: `{ "username": "<username>", "password": "<password>" }`
  - Response: `{ "message": "User created successfully", "token": "<generated_token>" }`

- **POST /api/signin** - Authenticate a user.
  - Request body: `{ "username": "<username>", "password": "<password>" }`
  - Response: `{ "message": "Sign in successful", "token": "<generated_token>", "user": "<username>" }`

### Security Considerations

- It is recommended to use HTTPS when deploying this server to ensure secure communication between clients and the server.
- In a production environment, consider using a secure session management system to handle user sessions and protect against session hijacking attacks.

### License

This project is licensed under the [MIT License](LICENSE).
