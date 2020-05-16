// Jobs the user "saved" for later
module.exports = function (sequelize, DataTypes) {
  const SavedJob = sequelize.define("SavedJob", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1]
      }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    applied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  });

  return SavedJob;
};

// CREATE TABLE saved_jobs{
//     id INT NOT NULL ,
//     job_title VARCHAR(255),
//     job_description,
//     job_url,
//     applied BOOLEAN,
//     usersessionID,
//     PRIMARY KEY (id)
// }
