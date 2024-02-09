const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;

  console.log(`${timestamp} - ${method} request received`);
  next(); 
}

app.use(requestLoggerMiddleware);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
