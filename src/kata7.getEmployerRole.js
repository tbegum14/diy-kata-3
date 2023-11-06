const getEmployerRole = (employeeName, employees) => {
  employees.find((emp) => emp.name === employeeName).role;
};

module.exports = getEmployerRole;
