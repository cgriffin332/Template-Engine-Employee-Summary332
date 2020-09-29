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

//export info
module.exports =  Engineer;

