# E-commerce Back End

This is a back-end application for an e-commerce website, built using Express.js API and Sequelize ORM to interact with a MySQL database. The application allows for managing categories, products, and tags.

## Insomnia Tests
https://pdx.nv.instructuremedia.com/fetch/QkFoYkIxc0hhUVNIYWVNRE1Hd3JCMnJ1UUdRPS0tMmI5MDQ1NWM4YmYxZThjMjJmMGIwYjMwNjQ5YTk5NTA1OGU3MWZlYg.mp4

https://pdx.nv.instructuremedia.com/fetch/QkFoYkIxc0hhUVMxYWVNRE1Hd3JCMnJ1UUdRPS0tMTlkMzczMjUxMTFhOTJlOThhZmI1YTY5N2YxNTA0Njk0YzRmZjkxZg.mp4

The rest of the videos are in the submission of this assignment

## Getting Started
1. Clone the starter code repository to your local machine.

2. Install dependencies by running npm install in the root directory of the cloned repository.

3. Create a .env file in the root directory of the application, and set the following environment variables:

DB_NAME=<your_database_name>
DB_USER=<your_mysql_username>
DB_PASSWORD=<your_mysql_password>

4. Run the database schema and seed commands to create a development database and seed it with test data:

npm run db:create
npm run db:seed

5. Start the application by running npm start in the root directory of the application. This will start the Express.js server and sync the Sequelize models with the MySQL database.
6. Use an API client, such as Insomnia Core or Postman, to test the API endpoints for categories, products, and tags, using the following routes:

GET /api/categories
GET /api/products
GET /api/tags
POST /api/categories
POST /api/products
POST /api/tags
PUT /api/categories/:id
PUT /api/products/:id
PUT /api/tags/:id
DELETE /api/categories/:id
DELETE /api/products/:id
DELETE /api/tags/:id

## Technologies Used
- Express.js
- Sequelize ORM
- MySQL
- Node.js

## Contributions
Contributions to this project are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue in this repository.

## License 
N/A

## Contact
For any questions or inquiries, please contact me at ayalaarellanoanthony@gmail.com