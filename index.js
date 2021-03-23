//insert inquirer and fs
const inquirer = require("inquirer");
const fs = require("fs");
//create objects for file path
const path = require("path");
const buildHTMLDirectory = path.resolve(__dirname, "html");
const htmlFilePath = path.join(buildHTMLDirectory, "index.html");
//require methods for each employee class
const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");
const intern = require("./lib/Intern.js")

module.export = manager
module.export = engineer
module.export = intern

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
      },
      {
        type: "input",
        name: "managerPhone",
        message: "What is the manager's phone number?",
      },
    ])
    .then((answers) => console.log(answers));
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the engineer's GitHub username?",
      },
    ])
    .then((answers) => console.log(answers));
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "internSchoolName",
        message: "What is the intern's school name?",
      },
    ])
    .then((answers) => console.log(answers));
}

inquirer
  .prompt([
    {
      name: "employee",
      message: "What type of employee would you like to add?",
      type: "list",
      choices: ["Engineer", "Intern", "I'm done entering employees."]
    },
  ])
  .then(function (){});  