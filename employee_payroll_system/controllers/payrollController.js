const employeeModel = require("../models/employeeModel");

exports.calculateSalary = async (req, res, next) => {
    try {
        const employee = await employeeModel.getEmployeeById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        const basic = Number(employee.basicSalary);

        const hra = 0.20 * basic;
        const da = 0.10 * basic;
        const pf = 0.05 * basic;

        const netSalary = basic + hra + da - pf;

        res.status(200).json({
            employeeId: employee.id,
            name: employee.name,
            department: employee.department,
            basicSalary: basic,
            HRA: hra,
            DA: da,
            PF: pf,
            netSalary: netSalary
        });

    } catch (error) {
        next(error);
    }
};
