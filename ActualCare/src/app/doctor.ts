import { LoginInfo } from './login'

export class Doctor {
    Doc_id: number;
    name: string;
    login: LoginInfo;

    constructor(name: string){
        this.name = name;
    }

  }