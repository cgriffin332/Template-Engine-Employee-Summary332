// emport employee
const Employee = require("./Employee");

// create manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

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

// exports
module.exports = {
  Manager,
  managerQuestions,
};
