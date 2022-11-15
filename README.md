# book-donation-platform

This application is built to support people with little to no access to learning resources. 

# Run Application
To run this application, you need to start the server and the client app:

## Backend server
Navigate to the `api` directory and do the following:
- duplicate the `.env.example` file and name it `.env.dev`.
- start your mongoDB database and copy the mongoDB URI
- navigate to the newly created `.env.dev` file and replace the `YOUR DATABASE PASSWORD KEY GOES HERE` value with the actual DB password Key.
- `yarn install` to install all backend dependencies
- `yarn run dev` to start the backend server

## Client/frontend app
Once you've started the backend, navigate to the `client` directory and run the following commands:
- `yarn install` to install all backend dependencies
- `yarn dev` to start the frontend

