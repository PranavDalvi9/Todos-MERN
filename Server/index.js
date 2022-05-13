
const express = require("express");
const connect = require("./src/configs/db")
let port = process.env.PORT || 2344;
const cors = require("cors");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

app.use(cors());

// const flightController = require("./src/controllers/flightController")
const todosApi = require("./Src/Controllers/TodosController")
// const airportController = require("./src/controllers/airportController")
 app.use("/todos" , todosApi)
// app.use("/flight", flightController)
// app.use("/airport", airportController)




app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});