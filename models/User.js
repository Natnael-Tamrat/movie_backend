const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const users = sequelize.define(
  "users",
  {
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    favourite_movies: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

sequelize
  .sync()
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = users;
