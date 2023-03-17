# Movie Backend Project

## MVC Architecture 

The project is built based on the popular MVC architecture approach. 

I have a user model, user controller module for operation and their is an entry point for the node application `app.js`.
The configuration with the `mysql` database is configured with `db.js` file.

## Database and ORM 

I have used a relation Database `My-SQL` and an ORM `Sequelise` for conducting CRUD operations.

### Authentication 

Passwords are store after hashed by bcrypt algorithm.

### Framework 

The node app built by Express framework and used packages like `dotenv` for creating connection from the environmental variables.

### Deployment 

The node application is Deployed on cloud service (Linode). used `Nginx` for port forwarding and accessing the API request through http request.
also used `pm2` task runner.
