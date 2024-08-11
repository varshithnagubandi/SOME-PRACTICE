const express = require("express");
const router = express.Router();
const Employee = require("../model/Employee");
const EmployeeControllers = require("../controller/EmployeeController");

router.post("/add-emp", EmployeeControllers.NewEmployee);

module.exports = router;
