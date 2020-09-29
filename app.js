const M = require("./lib/Manager");
const E = require("./lib/Engineer");
const I = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// const internQuestions = [
//   {
//     type: "input",
//     message: "What is your intern's name?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "What is your intern's id?",
//     name: "id",
//   },
//   {
//     type: "input",
//     message: "What is your intern's email?",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "What is your intern's school?",
//     name: "school",
//   },
//   {
//     type: "list",
//     message: "Which team member would you like to add?",
//     name: "employee",
//     choices: [
//       "Intern",
//       "Engineer",
//       "I don't want to add any more team members.",
//     ],
//   },
// ];
// const engineerQuestions = [
//   {
//     type: "input",
//     message: "What is your engineer's name?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "What is your engineer's id?",
//     name: "id",
//   },
//   {
//     type: "input",
//     message: "What is your engineer's email?",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "What is your engineer's GitHub username?",
//     name: "github",
//   },
//   {
//     type: "list",
//     message: "Which team member would you like to add?",
//     name: "employee",
//     choices: [
//       "Intern",
//       "Engineer",
//       "I don't want to add any more team members.",
//     ],
//   },
// ];
// const managerQuestions = [
//   {
//     type: "input",
//     message: "What is your manager's name?",
//     name: "name",
//   },
//   {
//     type: "input",
//     message: "What is your manager's id?",
//     name: "id",
//   },
//   {
//     type: "input",
//     message: "What is your manager's email?",
//     name: "email",
//   },
//   {
//     type: "input",
//     message: "What is your manager's office number?",
//     name: "officeNumber",
//   },
//   {
//     type: "list",
//     message: "Which team member would you like to add?",
//     name: "employee",
//     choices: ["Intern", "Engineer"],
//   },
// ];
const employees = [];
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

const askIntern = function () {
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

const askEngineer = function () {
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
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
const makeTeamHtml = function () {
  fs.writeFile(outputPath, render(employees), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
};
