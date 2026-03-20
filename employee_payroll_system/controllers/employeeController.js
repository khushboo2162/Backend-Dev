const employeeModel = require("../models/employeeModel");

// Get all employees
exports.getEmployees = async (req, res, next) => {
    try {
        const employees = await employeeModel.getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        next(error);
    }
};

// Get employee by ID
exports.getEmployee = async (req, res, next) => {
    try {
        const employee = await employeeModel.getEmployeeById(req.params.id);

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

// Create employee
exports.addEmployee = async (req, res, next) => {
    try {
        const { name, email, department, basicSalary, joiningDate } = req.body;

        if (!name || !email || !department || !basicSalary || !joiningDate) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newEmployee = await employeeModel.createEmployee(req.body);

        res.status(201).json(newEmployee);
    } catch (error) {
        next(error);
    }
};

// Update employee
exports.updateEmployee = async (req, res, next) => {
    try {
        const updated = await employeeModel.updateEmployee(
            req.params.id,
            req.body
        );

        if (!updated) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json(updated);
    } catch (error) {
        next(error);
    }
};

// Delete employee
exports.deleteEmployee = async (req, res, next) => {
    try {
        const deleted = await employeeModel.deleteEmployee(req.params.id);

        if (!deleted) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee deleted successfully"
        });
    } catch (error) {
        next(error);
    }
};
