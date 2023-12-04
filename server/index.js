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

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.status(200).json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("the user does not exist");
    }
  });
});
app.listen(PORT, () => {
  //   res.status(200).send(res.json);
  console.log("server is running");
});
