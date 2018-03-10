import{Insurance} from './insurance'
import{Doctor} from './doctor'
import{LoginInfo} from './login'
import{PersonalInfo} from './personalInfo'

export class Patient {
    myInsurance:Insurance;
    PCP:Doctor;
    login:LoginInfo;
    myPersonalInfo:PersonalInfo;
}