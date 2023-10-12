<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
# table-app
# Custom Table Component

![Custom Table Component](./screenshots/table1.png)


### Running the project

To run the Custom Table Component, you will need to start both the frontend application and the mock API server.

### Start the Frontend Application
`$npm start`
the application will run at: 
"http://localhost:3000."

### Start the Mock API Server:

This application uses json-server to simulate an API. You can start it by running the following command in a separate terminal window:
`$json-server --watch db.json --port 5000`
The mock API server will run at:
"http://localhost:5000"

### Features
The Custom Table Component offers several features to display and interact with data:

Pagination: Easily navigate through large datasets 
![Custom Table Component](./screenshots/pagination.png)

Row Selection: Select one or multiple rows in the table.
![Custom Table Component](./screenshots/table2.png)

Custom Column Headers: Customize column headers with your desired content.
![Custom Table Component](./screenshots/header.png)

Mock Data or API Data: You can choose to use mock data by setting the useMockData configuration to true in the config.json file or use real API data by setting it to false.
![Custom Table Component](./screenshots/code.png)

### Use Mock Data

To use mock data in the application, follow these steps:
Open the config.json file.
Set the useMockData field to true
Save the file.

### Use API data

To use API data, set useMockData to false
>>>>>>> 1f71982db0c12d056e5f3f1282ab36df2c0e4507
