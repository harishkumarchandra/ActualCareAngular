import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorService } from './doctor.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component'
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';

import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { PatientService } from './patient.service';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    AdminComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DoctorService, 
    MessageService,
    LoginService,
    RegisterService,
    PatientService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
