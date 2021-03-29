

const API_END_POINT = "/api";
const COMPANY_URL = API_END_POINT + "/company/";
const EMPLOYEE_URL = API_END_POINT + "/employee/";
const FRAME_MATERIAL_URL = API_END_POINT + "/frame-material/";
const BRAND_URL = API_END_POINT + "/brand/";
const FRAME_MODEL_URL = API_END_POINT + "/frame-model/";
const LENS_TYPE_URL = API_END_POINT + "/lens-type/";
const BOXES_URL = API_END_POINT + "/boxes/";


const REGISTER_ACTION='register'
const ADMIN_LOGIN_ACTION='login'
const EMPLOYEE_LOGIN_ACTION='employee-login'
const USERNAME_ACTION='username'
const GET_ACTION = "get";
const GET_ACTION_ONE = "getone";
const ADD_ACTION = "add";
const UPDATE_ACTION = "update";
const DELETE_ACTION ="delete";
const FIND_ACTION="find";
const FIND_ACTION_ONE="/findone";
const FORGET_PASSWORD_ACTION ="forget-password";

export class Utils {
    /*Signupurl*/
    static APIURL = API_END_POINT;

    static getSignupURL() {
        return COMPANY_URL + REGISTER_ACTION ;
    }

    static getOneSignupURL() {
        return COMPANY_URL + GET_ACTION_ONE;
    }
    
    static addSignupURL() {
        return COMPANY_URL ;
    }

    static updateCompanyURL() {
        return COMPANY_URL + UPDATE_ACTION;
    }
    
    static deleteSignupURL() {
        return COMPANY_URL + DELETE_ACTION;
    }
    
    static getUserNameURL() {
        return COMPANY_URL +  USERNAME_ACTION ;
    }

    static adminLoginURL() {
        return COMPANY_URL +  ADMIN_LOGIN_ACTION ;
    }

    static forgetPasswordURL() {
        return COMPANY_URL +  FORGET_PASSWORD_ACTION ;
    }
    static getforgetPasswordURL() {
        return COMPANY_URL +  FORGET_PASSWORD_ACTION ;
    }
    static UpdateforgetPasswordURL() {
        return COMPANY_URL +  FORGET_PASSWORD_ACTION;
    }

    /*loginurl*/

    static employeeLoginURL() {
        return EMPLOYEE_URL +  EMPLOYEE_LOGIN_ACTION ;
    }
    
    //guard
    static loggedIn() {
        return !!localStorage.getItem('token');
    }

    static getToken(){
        return localStorage.getItem('token');
    }

    static isLoggedIn() {
        return localStorage.getItem('token');
    }

    static isLoggedOut() {
        return localStorage.removeItem('token');
    }

    // static getIdentifier(){
    //     return localStorage.getItem('Identifier');
    // }

    //employee details Api method
    static addemployeeURL() {
        return EMPLOYEE_URL + ADD_ACTION;
    }
    static getemployeeURL() {
        return EMPLOYEE_URL +  GET_ACTION_ONE ;
    }
    static updateemployeeURL() {
        return EMPLOYEE_URL + UPDATE_ACTION ;
    }

    static getAllemployeeURL() {
        return EMPLOYEE_URL +  GET_ACTION;
    }

    //frame material Api Method
    static addframematerialURL() {
        return FRAME_MATERIAL_URL + ADD_ACTION;
    }
    static getallframematerialURL() {
        return FRAME_MATERIAL_URL + GET_ACTION;
    }
    static getframematerialURL() {
        return FRAME_MATERIAL_URL + GET_ACTION_ONE;
    }
    static updateframematerialURL() {
        return FRAME_MATERIAL_URL + UPDATE_ACTION;
    }

    //Brand Api methods
    static addBrandURL() {
        return BRAND_URL + ADD_ACTION;
    }
    static getallBrandURL() {
        return BRAND_URL + GET_ACTION;
    }
    static getBrandURL() {
        return BRAND_URL + GET_ACTION_ONE;
    }
    static updateBrandURL() {
        return BRAND_URL + UPDATE_ACTION;
    }
    static deleteBrandURL() {
        return BRAND_URL + DELETE_ACTION;
    }

    //framemodel Api methods
    static addframemodelURL() {
        return FRAME_MODEL_URL + ADD_ACTION;
    }
    static getallframemodelURL() {
        return FRAME_MODEL_URL + GET_ACTION;
    }
    static getframemodelURL() {
        return FRAME_MODEL_URL + GET_ACTION_ONE;
    }
    static updateframemodelURL() {
        return FRAME_MODEL_URL + UPDATE_ACTION;
    }
    static findByModelURL() {
        return FRAME_MODEL_URL + FIND_ACTION + FIND_ACTION_ONE;
    }

    //LensTYpe Api Method
    static addLensTypeURL() {
        return LENS_TYPE_URL + ADD_ACTION;
    }
    static getallLensTypeURL() {
        return LENS_TYPE_URL + GET_ACTION;
    }
    static getLensTypeURL() {
        return LENS_TYPE_URL + GET_ACTION_ONE;
    }
    static updateLensTypeURL() {
        return LENS_TYPE_URL + UPDATE_ACTION;
    }
    static findByNameURL() {
        return LENS_TYPE_URL + FIND_ACTION + FIND_ACTION_ONE;
    }

    //Boxes Api Methods
    static addBoxesURL() {
        return BOXES_URL + ADD_ACTION;
    }
    static getallBoxesURL() {
        return BOXES_URL + GET_ACTION;
    }
    static getBoxesURL() {
        return BOXES_URL + GET_ACTION_ONE;
    }
    static updateBoxesURL() {
        return BOXES_URL + UPDATE_ACTION;
    }

}