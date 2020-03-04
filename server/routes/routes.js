module.exports = app => {
  const employees = require("../controllers/employeeController.js");

  var router = require("express").Router();

  // Create a new Employee
  router.post("/", employees.create);

  // Retrieve all employees
  router.get("/", employees.findAll);

  // Retrieve all active employees
  router.get("/active", employees.findAllActive);

  // Retrieve a single Employee with id
  router.get("/:id", employees.findOne);

  // Update a Employee with id
  router.put("/:id", employees.update);

  // Delete a Employee with id
  router.delete("/:id", employees.delete);

  // Create a new Employee
  router.delete("/", employees.deleteAll);

  app.use("/api/employees", router);
};
