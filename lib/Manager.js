const Employee = require('./Employee')
module.export = class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }
 getOfficeNum(){
     return this.officeNum
 }
 getRole(){
     return "Manager"
 }
}