import { CompanySignup } from "./companysignup";

export class Employee{
    constructor( public uuid:string,
        public employeeName:string,
        public mobileNumber:string,
        public employeeEmail:string,
        public employeePassword:string,
        public address:string,
        public DOB:Date,
        public DOJ:Date,
        public adminAccess:string,
        public avatar:string,
        public fk_companyid:string,
        public companySignUp:CompanySignup
          ){}
}