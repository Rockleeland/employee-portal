module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    email: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    },
    position: {
      type: Sequelize.STRING
    }
  });

  return Employee;
};
