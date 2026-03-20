let employees = [
    {
        id: 1,
        name: "Deepika",
        email: "deepika@gmail.com",
        department: "IT",
        basicSalary: 50000,
        joiningDate: "2024-01-15"
    }
];

let currentId = 2;


// Get all employees
const getAllEmployees = async () => {
    return employees;
};

// Get employee by ID
const getEmployeeById = async (id) => {
    return employees.find(emp => emp.id === parseInt(id));
};

// Create new employee
const createEmployee = async (data) => {
    const newEmployee = {
        id: currentId++,
        ...data
    };

    employees.push(newEmployee);
    return newEmployee;
};

// Update employee
const updateEmployee = async (id, data) => {
    const index = employees.findIndex(
        emp => emp.id === parseInt(id)
    );

    if (index === -1) return null;

    employees[index] = {
        ...employees[index],
        ...data
    };

    return employees[index];
};

// Delete employee
const deleteEmployee = async (id) => {
    const index = employees.findIndex(
        emp => emp.id === parseInt(id)
    );

    if (index === -1) return null;

    const deleted = employees.splice(index, 1);
    return deleted[0];
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};
