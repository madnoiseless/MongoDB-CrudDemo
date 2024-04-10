# MongoDB CrudDemo

This file contains a JavaScript application that interacts with MongoDB using the MongoDB driver. The code performs CRUD (Create, Read, Update, Delete) operations on a "fruitsDB" database and a "fruits" collection within it. The application demonstrates how to insert, find, and delete documents in the collection.

## Prerequisites

Before running this application, ensure you have the following installed:

1. Node.js: Download and install the latest version from [https://nodejs.org/](https://nodejs.org/).
2. MongoDB: Download and install the latest version from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community). Make sure to start the MongoDB server.

## Usage

1. Save the `app.js` file in your preferred working directory.
2. Open a terminal or command prompt and navigate to the directory where `app.js` is saved.
3. Run the application using Node.js by executing the following command:
   ```
   node app.js
   ```

The application will connect to the local MongoDB server, use the "fruitsDB" database, and perform the following operations:

1. Insert three fruit documents into the "fruits" collection.
2. Find and display all documents in the "fruits" collection.
3. Delete all documents in the "fruits" collection.

## Modifying the Code

You can modify the `fruits` array and the operations performed in the `main()` function to suit your needs. Remember to handle any exceptions and errors that may occur during the execution of these operations.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to create a pull request or submit an issue on the project's GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
