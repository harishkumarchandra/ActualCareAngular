import{Insurance} from './insurance'
import{Doctor} from './doctor'
import{LoginInfo} from './login'
import{PersonalInfo} from './personalInfo'
import{Sympton} from './sympton'
import{Allergy} from './allergy'

export class Patient {
    PCP:string;
    login:LoginInfo;
    myInsurance:string;
    myPersonalInfo:PersonalInfo;
    myAllgeries: Allergy;
    mySymptons: Sympton;

    constructor( myInsurance:string,PCP:string,login:LoginInfo,myPersonalInfo:PersonalInfo) {
        this.login = login;
        this.myInsurance = myInsurance;
        this.myPersonalInfo = myPersonalInfo;
        this.PCP = PCP;
    }
    
}