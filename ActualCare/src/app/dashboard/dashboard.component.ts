import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  doctors: Doctor[] = [];


  ngOnInit() {
    this.getDoctors();
  }

  constructor(private doctorService: DoctorService) { }

  getDoctors(): void{
    this.doctorService.getDoctors()
      .subscribe(doctors => this.doctors=doctors.slice(1,5));
  }

}
