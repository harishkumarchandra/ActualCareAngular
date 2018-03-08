import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DoctorDetailComponent }  from './doctor-detail/doctor-detail.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'dashboard', canActivate: [AuthGuard] ,component: DashboardComponent },
  { path: 'detail/:id', component: DoctorDetailComponent },
  
 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'doctor', canActivate: [AuthGuard] ,component: DoctorComponent },
  { path: 'admin', canActivate: [AuthGuard] ,component: AdminComponent },
  { path: 'patient', canActivate: [AuthGuard] ,component: PatientComponent}

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule {}