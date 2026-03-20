const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");
const payrollController = require("../controllers/payrollController");

// CRUD Routes
router.get("/", employeeController.getEmployees);
router.get("/:id", employeeController.getEmployee);
router.post("/", employeeController.addEmployee);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

// Payroll Route
router.get("/:id/payroll", payrollController.calculateSalary);

module.exports = router;
