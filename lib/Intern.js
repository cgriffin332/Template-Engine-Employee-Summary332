const Employee = require("./Employee");
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
// * school
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
// * getSchool()

// * getRole() // Overridden to return 'Intern'
module.exports = {
  Intern,
  internQuestions
}