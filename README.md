# INFO7255-33015-Adv-Big-Data-App-Indexing

```markdown
# Demo Projects Readme

This repository contains three demo projects showcasing the implementation of REST APIs that can handle structured JSON data, support CRUD operations, validation, and various advanced features. Each project is detailed below:

## Demo 1: Basic REST API with Validation

### Tech Stack
- Spring Boot (Java)
- Key/Value Store (e.g., Redis)

### Features
- REST API handling structured JSON data
- Support for CRUD operations (POST, GET, DELETE)
- Validation using JSON Schema
- Storage of data in a key/value store

### Data Flow
1. Validate incoming JSON payloads against a JSON Schema.
2. Implement basic CRUD operations using HTTP methods.
3. Store data in a key/value store.

## Demo 2: REST API with Advanced Features

### Tech Stack
- Spring Boot (Java)
- Key/Value Store (e.g., Redis)
- JSON Schema
- Security using RS 256
- Advanced semantics for REST API operations

### Features
- REST API for structured JSON data
- CRUD operations with merge/patch support and DELETE
- Validation with JSON Schema
- Advanced semantics for update, conditional read, and write
- Storage of data in a key/value store
- Security using RS 256 for authentication

### Data Flow
1. Validate JSON payloads against JSON Schema.
2. Implement advanced CRUD operations.
3. Use RS 256 for security.
4. Store data in a key/value store.

## Demo 3: REST API with Elastic Search and Queueing

### Tech Stack
- Spring Boot (Java)
- Key/Value Store (e.g., Redis)
- Elastic Search
- RabbitMQ

### Features
- REST API for structured JSON data
- CRUD operations with merge support
- Validation with JSON Schema
- Advanced semantics for update if not changed
- Storage of data in a key/value store
- Search with join using Elastic
- Parent-Child indexing
- Queueing for indexing requests
- Security

### Data Flow
1. Validate JSON payloads against JSON Schema.
2. Implement CRUD operations and Elastic Search for advanced queries.
3. Index data in Elastic Search with queueing using RabbitMQ.
4. Security mechanisms for protection.

## Getting Started

### Prerequisites
- Ensure you have the required dependencies installed:
  - Redis Server
  - ElasticSearch
  - Kibana
  - RabbitMQ Server

### How to Run
1. Start the Redis Server with `redis-server` command.
2. Start the ElasticSearch server with `elasticsearch` command.
3. Start Kibana with `kibana` command.
4. Start RabbitMQ server with `rabbitmq-server` command.

This will set up the environment for the demos. You can create and query data using the provided REST API endpoints.

## API Endpoints

- GET `/token` - Generates an RSA-signed JWT token for authentication.
- POST `/plan` - Creates a new plan with a JSON payload.
- PUT `/plan/{id}` - Updates an existing plan by ID.
- PATCH `/plan/{id}` - Patches an existing plan by ID.
- GET `/plan/{id}` - Retrieves an existing plan by ID.
- DELETE `/plan/{id}` - Deletes an existing plan by ID.

For the PATCH and PUT requests, ensure to include a valid Etag in the `If-Match` HTTP Request Header for concurrency control.

These demo projects showcase different levels of complexity and features for handling structured JSON data via REST APIs. Each project can be set up following the provided instructions and includes sample API endpoints for testing.
```

Feel free to modify this `readme.md` as needed for your projects.