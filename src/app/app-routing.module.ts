import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { GetAlltrashnoteComponent } from './components/get-alltrashnote/get-alltrashnote.component';
import { GetAllarchiveComponent } from './components/get-allarchive/get-allarchive.component';
import { AuthguardGuard } from './services/authguard/authguard.guard';

const routes: Routes = [
  {path:'' ,redirectTo:"/login" ,pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'registration',component:RegistrationComponent},
  {path: 'forgot-password',component:ForgotPasswordComponent},
  {path: 'reset-password/:token',component:ResetPasswordComponent},
  {path: 'dashboard',component:DashboardComponent, canActivate:[AuthguardGuard],   
    children: [
      {path: 'notes', component:GetallnotesComponent},
      {path: 'trash', component:GetAlltrashnoteComponent},
      {path: 'archive', component:GetAllarchiveComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
