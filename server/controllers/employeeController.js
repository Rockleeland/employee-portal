const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Email can not be empty!"
    });
    return;
  }

  // Create an Employee
  const employee = {
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    active: req.body.active ? req.body.active : true,
    position: req.body.position
  };

  // Save Employee in the database
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  Employee.findAll({ where: condition })
    .then(data => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.send(data);
    })
    .catch(err => {
      console.log("this is not working");
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id
      });
    });
};

// Update a Employee by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Employee.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Employee with id=${id}. Maybe Employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
};

// Delete a Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Employee.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Employees were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all employees."
      });
    });
};

// Find all active Employees
exports.findAllActive = (req, res) => {
  Employee.findAll({ where: { active: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees."
      });
    });
};
