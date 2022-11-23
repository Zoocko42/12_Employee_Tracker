import express from 'express'
import mysql from 'mysql2'
import inquirer from 'inquirer';
import dotenv from 'dotenv'
// const inquirer = require('inquirer')
const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the books_db database.`)
);



inquirer
  .prompt([
    {
      name: "mainMenu",
      message: "Greetings! Please select from the options below.",
      type: "list",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update Employee Role"]
    }
  ]).then((data) => {
    if (data.mainMenu == "View All Departments") {
      db.query('SELECT * FROM department', function (err, results) {
        console.log(results)})
    } else if (data.mainMenu == "View All Roles") {
      db.query('SELECT * FROM role', function (err, results) {
        console.log(results)})
    } else {
      console.log(typeof data)
      db.query('SELECT * FROM employee', function (err, results) {
        console.log(results)})
    }
  })



// Connect to port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });