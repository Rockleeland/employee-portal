const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// sanity check for server
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the employee portal." });
});

const db = require("./server/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("db");
});

require("./server/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
