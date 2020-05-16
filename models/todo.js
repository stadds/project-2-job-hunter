// ToDos for each job
module.exports = function (sequelize, DataTypes) {
  const Todo = sequelize.define("Todo", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  Todo.associate = function (models) {
    Todo.belongsTo(models.SavedJob, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Todo;
};

// CREATE TABLE job_todos {
//     id INT NOT NULL AUTO_INCREMENT,
//     todo,
//     is_complete BOOLEAN,
//     job_id FOREGIN KEY
// }
