const express = require("express");
const app = express();
const port = 3000;

// Define a route to handle GET requests to the root URL
app.get("/", (req, res) => {
  // Create a JSON object with the message
  const message = { message: "Hello, world!" };

  // Send the JSON response
  res.json(message);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
