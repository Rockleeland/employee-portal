# employee-portal

Dashboard for employees. Local CRUD app using React, Node, and MySQL.

## Installation

1.) `bash yarn install`

2.) `bash cd client`

    ```bash
    yarn install
    ```

3.) Create the database in local mysql using the queries in the `bash seed.sql` file.

4.) Create env file to fill in mysql configuration. Use the `bash test.env` file as an example of how the env file should look like. Choose the database name from the seed.sql file.

5.) `bash yarn run start`

    This command concurrently starts the server as well as starts the react app.

## Rest Apis

The react app uses a GET request, but there are other requests as well. I use Postman to call my routes. Pictures are provided.
![Post](./photos/Post.png)
