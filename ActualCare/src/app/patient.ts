import{Insurance} from './insurance'
import{Doctor} from './doctor'
import{LoginInfo} from './login'
import{PersonalInfo} from './personalInfo'

export class Patient {
    myInsurance:string;
    PCP:string;
    login:LoginInfo;
    myPersonalInfo:PersonalInfo;
    constructor( 
    myInsurance:string,
    PCP:string,
    login:LoginInfo,
    myPersonalInfo:PersonalInfo) {
        this.login = login;
        this.myInsurance = myInsurance;
        this.myPersonalInfo = myPersonalInfo;
        this.PCP = PCP;
    }
}