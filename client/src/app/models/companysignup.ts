export class CompanySignup{
    constructor(public uuid:string,
        public companyName:string,
        public customid:number,
        public tin:string,
        public userName:string,
        public email:string,
        public password:string,
        public address:string,
        public phoneNumber:string,
        public avatar:string,
        public currentPassword?: string,
        public newPassword?: string,
        public cnfNewPassword?: string,
        ){}
}