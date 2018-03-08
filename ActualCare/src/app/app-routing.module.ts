import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DoctorDetailComponent }  from './doctor-detail/doctor-detail.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: DoctorDetailComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {}