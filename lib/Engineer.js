//import employee

const Employee = require("./Employee");
// write engineer class extended from employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
// array of questions with validations
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
//export info
module.exports = {
  Engineer,
  engineerQuestions,
};
