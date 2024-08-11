const express = require("express");
const router = express.Router();
const Employee = require("../model/Employee");
const EmployeeContrller=require("../controller/EmployeeContrller")

router.post("/")
