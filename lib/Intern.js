const Employee = require('./Employee')
module.export = class Intern extends Employee{
    constructor(name, id, email, schoolName){
        super(name, id, email);
        this.schoolName = schoolName;
    }
 getschoolName(){
     return this.schoolName
 }
 getRole(){
     return "Intern"
 }
}