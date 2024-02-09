const express = require("express");
const app = express();
const port = 3000;

/**
 * Error handling middleware for handling non-positive integer errors
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function errorHandler(err, req, res, next) {
  console.error(err.message);
  res.status(400).json({ error: "Invalid positive integer provided" });
}

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
  const number = parseInt(req.query.number);

  if (Number.isInteger(number) && number > 0) {
    res.json({ message: "Success! Positive integer received." });
  } else {
    const error = new Error("Invalid positive integer provided");
    next(error); // Trigger the error handling middleware
  }
}

// Set up the route with the positiveIntegerHandler
app.get("/positive", positiveIntegerHandler);

// Use the error handling middleware for all errors
app.use(errorHandler);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Test Cases:

// Request to http://localhost:3000/positive?number=5 should return a success message.
// Request to http://localhost:3000/positive?number=-2 should trigger the error handling 
// middleware and return a custom error message with a 400 Bad Request status.
