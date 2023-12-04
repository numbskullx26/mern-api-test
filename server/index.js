const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EmployeeModel = require("./models/Employee");

const PORT = 3001;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://indrajeet:indrajeet@employee.zgwsgjh.mongodb.net/test"
);

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  //   res.status(200).send(res.json);
  console.log("server is running");
});
