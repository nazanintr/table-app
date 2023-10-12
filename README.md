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
![Custom Table Component](./public/screenshots/pagination.png)

Row Selection: Select one or multiple rows in the table.
![Custom Table Component](./public/screenshots/table2.png)

The Custom Table Component provides the flexibility to customize both the table header and the column headers to suit your needs.

#### Custom Table Header

Custom Column Headers: Customize column headers with your desired content.
You can set a custom header for the table. This allows you to place custom content or HTML elements at the top of the table.
![Custom Table Component](./public/screenshots/header.png)

#### Custom Column Headers

Define your own column headers by specifying an array of custom headers. This replaces the default headers generated from the data.

![Custom Column Headers](./public/screenshots/customColumnHeaders.png)
![Custom Column Headers](./public/screenshots/customColumnHeaders2.png)

**Note:** The use of a custom table header will remove the default column headers, and specifying custom column headers will hide the custom table header.

Mock Data or API Data: You can choose to use mock data by setting the useMockData configuration to true in the config.json file or use real API data by setting it to false.
![Custom Table Component](./public/screenshots/code.png)

### Use Mock Data

To use mock data in the application, follow these steps:
Open the config.json file.
Set the useMockData field to true
Save the file.

### Use API data

To use API data, set useMockData to false
