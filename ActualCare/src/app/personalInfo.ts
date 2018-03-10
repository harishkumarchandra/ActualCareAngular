export class PersonalInfo{
    f_name: string;
    l_name: string;
    age: number;
    sex: string;
    door_no: number;
    street: string;
    city: string;
    state: string;

    constructor(f_name,l_name,age,sex,door_no,street,city,state){
            this.f_name = f_name;
            this.l_name = l_name;
            this.age = age;
            this.sex = sex;
            this.door_no = door_no;
            this.street = street;
            this.city = city;
            this.state = state;
    }
}