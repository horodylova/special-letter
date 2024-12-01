
# Special Letter Project

This project allows users to write letters to their future selves, save them, and schedule them for delivery. It includes a React-based frontend, a PostgreSQL database for storing letters, and Kestra for orchestrating letter delivery.


## Requirements

To work on this project, you will need:
## Features

- Node.js (recommended version: 17.9.1)
- npm (version: 8.11.0 or higher)
- Docker (latest version)
- Kestra (runs in a Docker container)
- PostgreSQL (managed through Docker)

## Roadmap

 


## Installation

**Step 1: Clone the Repository**

```bash
  git clone https://github.com/horodylova/special-letter.git
cd special-letter
```

**Step 2: Install Dependencies**

```bash
 npm install
```

**Step 3: Run the Frontend**

Start the development server:

``` bash 
npm run dev
```

Open your browser and navigate to:

http://localhost:5173

**Step 4: Launch Docker Services**

Start the Docker services for PostgreSQL and Kestra:

```bash 
docker-compose up -d
```
**Step 5: Configure the Database**
Access the PostgreSQL database and create the required table:

```bash 
docker exec -it kestra_postgres psql -U kestra -d kestra
```

CREATE TABLE letters (
  id SERIAL PRIMARY KEY,
  message TEXT NOT NULL,
  open_at TIMESTAMP NOT NULL
);

**Step 6: Configure Kestra Flow**

Open the Kestra dashboard:
 
http://localhost:8080


## Create a new flow with the following details:

 id: special-letter
namespace: app.emails

tasks:
  - id: log-input
    type: io.kestra.plugin.core.log.Log
    message: >
      Received a letter:
      Text: {{ trigger.body.text }}
      Open At: {{ trigger.body.deliveryDate }}

  - id: save-to-database
    type: io.kestra.plugin.jdbc.postgresql.Query
    url: jdbc:postgresql://kestra_postgres:5432/kestra
    username: kestra
    password: k3str4
    sql: |
      INSERT INTO letters (message, open_at) VALUES ('{{ trigger.body.text }}', '{{ trigger.body.deliveryDate }}');

triggers:
  - id: webhook
    type: io.kestra.plugin.core.trigger.Webhook
    key: abcdefg

**Step 7: Test and Play with the Project**

Use the frontend to create and view letters.
Verify that the letters are correctly stored in the letters table in the PostgreSQL database.
Use tools like curl or Postman to interact with the webhook endpoint:
 
```bash 
curl -X POST http://localhost:8080/api/app.emails/special-letter/abcdefg \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello, future!", "deliveryDate": "2025-01-01"}'
```

## Tech Stack

**Client:** React, styled-components, React Router

**Docker
Services:** PostgreSQL (database)
Kestra (orchestrator)

**URLs**
Frontend: http://localhost:5173

Kestra Dashboard: http://localhost:8080
## Support

For support, [Email Me](mailto:horodylova.sv@gmail.com)


