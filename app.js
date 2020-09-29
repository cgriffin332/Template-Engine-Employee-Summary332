//IMPORTS

const M = require("./lib/Manager");
const E = require("./lib/Engineer");
const I = require("./lib/Intern");
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
  .prompt(M.managerQuestions)
  .then(function (response) {
    const manager = new M.Manager(
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
    .prompt(I.internQuestions)
    .then(function (response) {
      const intern = new I.Intern(
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
        console.log(employees);
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
    .prompt(E.engineerQuestions)
    .then(function (response) {
      const engineer = new E.Engineer(
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
        console.log(employees);
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
