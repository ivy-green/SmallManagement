const express = require("express");
const bodyParser = require("body-parser");

require("dotenv");
// require("dotenv").config();
// const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");

  res.setHeader(
    "Access-Control-Request-Headers",
    "Origin, Content-Type, Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(errorHandler);

app.use("/api/user/", require("./routes/userAPI"));
app.use("/api/product/", require("./routes/productAPI.js"));
app.use("/api/producttype/", require("./routes/productTypeAPI.js"));

app.listen(PORT, () => {
  console.log(`App running on port: http://localhost:${PORT}`);
});
