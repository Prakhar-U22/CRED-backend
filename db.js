// Importing mongoose library for MongoDB interaction
const mongoose = require('mongoose');
// MongoDB connection URI
const uri = `mongodb+srv://prakhar1:prakhar123@cluster1.e1gd7en.mongodb.net/crudapp?retryWrites=true&w=majority&appName=Cluster1`;

// Function to connect to MongoDB and fetch data
const mongoDB = async () => {
    try {
        // Connecting to MongoDB using the provided URI
        await mongoose.connect(uri);
        console.log("Connected successfully");

    } catch (err) {
        // Handling errors during MongoDB connection or data fetching
        console.log("---", err);
    }
}

module.exports = mongoDB; // Exporting the mongoDB function for use in other parts of the application
