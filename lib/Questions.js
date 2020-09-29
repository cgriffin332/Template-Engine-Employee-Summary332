// manager questions
const managerQuestions = [
  {
    type: "input",
    message: "What is your manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your manager's id?",
    name: "id",
    validate: function (input) {
      if (!isNaN(input)) {
        return true;
      } else {
        console.log("--id must be a number.");
      }
    },
  },
  {
    type: "input",
    message: "What is your manager's email?",
    name: "email",
    validate: function (input) {
      if (
        input.indexOf("@") !== -1 &&
        input.indexOf(".") !== -1 &&
        input.length >= 7
      ) {
        return true;
      } else {
        console.log("--Please provide a valid email.");
      }
    },
  },
  {
    type: "input",
    message: "What is your manager's office number?",
    name: "officeNumber",
    validate: function (input) {
      if (!isNaN(input)) {
        return true;
      } else {
        console.log("--office number must be a number.");
      }
    },
  },
  {
    type: "list",
    message: "Which team member would you like to add?",
    name: "employee",
    choices: [
      "Intern",
      "Engineer",
      "I don't want to add any more team members.",
    ],
  },
];
// Engineer Questions
const engineerQuestions = [
  {
    type: "input",
    message: "What is your engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your engineer's id?",
    name: "id",
    validate: function (input) {
      if (!isNaN(input)) {
        return true;
      } else {
        console.log("--id must be a number.");
      }
    },
  },
  {
    type: "input",
    message: "What is your engineer's email?",
    name: "email",
    validate: function (input) {
      if (
        input.indexOf("@") !== -1 &&
        input.indexOf(".") !== -1 &&
        input.length >= 7
      ) {
        return true;
      } else {
        console.log("--Please provide a valid email.");
      }
    },
  },
  {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "github",
  },
  {
    type: "list",
    message: "Which team member would you like to add?",
    name: "employee",
    choices: [
      "Intern",
      "Engineer",
      "I don't want to add any more team members.",
    ],
  },
];
// intern questions
const internQuestions = [
  {
    type: "input",
    message: "What is your intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your intern's id?",
    name: "id",
    validate: function (input) {
      if (!isNaN(input)) {
        return true;
      } else {
        console.log("--id must be a number.");
      }
    },
  },
  {
    type: "input",
    message: "What is your intern's email?",
    name: "email",
    validate: function (input) {
      if (
        input.indexOf("@") !== -1 &&
        input.indexOf(".") !== -1 &&
        input.length >= 7
      ) {
        return true;
      } else {
        console.log("--Please provide a valid email.");
      }
    },
  },
  {
    type: "input",
    message: "What is your intern's school?",
    name: "school",
  },
  {
    type: "list",
    message: "Which team member would you like to add?",
    name: "employee",
    choices: [
      "Intern",
      "Engineer",
      "I don't want to add any more team members.",
    ],
  },
];

//export questions
module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
