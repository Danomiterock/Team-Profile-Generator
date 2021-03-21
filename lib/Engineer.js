const Employee = require('./lib/Employee')
module.export = class Engineer extends Employee{
    constructor(name, id, email, gitHubUser){
        super(name, id, email);
        this.gitHubUser = gitHubUser;
    }
 getgitHubUser(){
     return this.gitHubUser
 }
 getRole(){
     return "Engineer"
 }
}