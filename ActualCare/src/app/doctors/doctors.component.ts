import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DOCTORS } from '../mock-doctors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {


  selectedDoctor: Doctor;

  onSelect(doctor: Doctor): void {
    this.selectedDoctor = doctor;
  }
  
  doctor: Doctor = {
    id: 1,
    name: 'Windstorm'
  };

  doctors = DOCTORS;

  constructor() { }

  ngOnInit() {
  }

}
