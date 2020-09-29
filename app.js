//IMPORTS

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQuestions = require("./lib/Questions").managerQuestions;
const engineerQuestions = require("./lib/Questions").engineerQuestions;
const internQuestions = require("./lib/Questions").internQuestions;
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

//VARIABLES
//empty array for teem
const employees = [];

//function to build teams
inquirer
  .prompt(managerQuestions)
  .then(function (response) {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.officeNumber
    );
    employees.push(manager);
    if (response.employee === "Intern") {
      askIntern();
    } else {
      askEngineer();
    }
  })
  .catch((err) => {
    console.log(err);
  });

//FUNCTION DEFINITIONS

//function to ask intern questions
const askIntern = () => {
  inquirer
    .prompt(internQuestions)
    .then(function (response) {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
      if (response.employee === "Intern") {
        askIntern();
      } else if (response.employee === "Engineer") {
        askEngineer();
      } else {
        makeTeamHtml();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//function to ask engineer questions
const askEngineer = () => {
  inquirer
    .prompt(engineerQuestions)
    .then(function (response) {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
      if (response.employee === "Intern") {
        askIntern();
      } else if (response.employee === "Engineer") {
        askEngineer();
      } else {
        makeTeamHtml();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
//write team to html file
const makeTeamHtml = () => {
  fs.writeFile(outputPath, render(employees), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
};
