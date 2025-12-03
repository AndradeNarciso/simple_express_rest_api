# simpe_express_rest_api

This project demonstrates a simple Node.js application connected to PostgreSQL using `pg-promise`. It includes a Docker Compose setup with an initial SQL script to create tables.

---

## Setup Instructions

1. **Create your `.env` file**

   Create a `.env` file in the root of the project with the following variables:

   ```env
   PORT=3000
   DB_USER=your_postgres_user
   DB_PASS=your_postgres_password
   DB_NAME=your_database_name
   DB_PORT=5435
   DB_HOST=localhost

2. ***Run: ***
docker-compose up -d


3. ***Run the server***
node  server.js
