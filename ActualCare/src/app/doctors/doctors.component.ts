import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  //doctors: Doctor[];

  doctors: Doctor[];

  selectedInsurance: string;
  pcp:string;

  constructor(private doctorService: DoctorService) { }

  getDoctors(): void{
    this.doctorService.getDoctors(this.selectedInsurance)
      .subscribe(doctors => this.doctors=doctors);
  }

  ngOnInit() {
    this.selectedInsurance = ((document.getElementById("ins") as HTMLInputElement).value);
    this.getDoctors();

  }

  onSelectIns(){
    this.selectedInsurance = ((document.getElementById("ins") as HTMLInputElement).value);
    console.log(this.selectedInsurance)
    this.getDoctors();
  }

  @Output() messageEvent = new EventEmitter<Doctor>();

  selectedDoctor: Doctor;

  onSelect(doctor: Doctor): void {
    this.pcp = 'Dr.'+doctor.name;
    this.selectedDoctor = doctor;
    this.messageEvent.emit(this.selectedDoctor);
    console.log(doctor)
  }

}
