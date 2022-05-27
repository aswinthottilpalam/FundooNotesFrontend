import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token:any;

  constructor(private httpService : HttpserviceService) {
    this.token= localStorage.getItem("token")
   }

   // Registration section api integration
   registration(reqdata: any){
     console.log(reqdata);
     let header = {
       headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
       })
     }

     return this.httpService.postService('User/register',reqdata,false,header);
   }

  //  Login section api integration
   login(reqdata: any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
       'Content-Type': 'application/json-patch+json',
      })
    }

    return this.httpService.postService(`User/Login/${reqdata.email}/${reqdata.password}`, reqdata, false, header)
  }

    //  forgot password section api integration
    forgotPassword(reqdata: any){
      console.log(reqdata);
      let header = {
        headers:new HttpHeaders({
         'Content-Type': 'application/json-patch+json',
        })
      }
      return this.httpService.postService(`User/ForgetPassword/${reqdata.email}`, reqdata, false, header)
    }


        //  Reset password section api integration
        resetPassword(reqdata: any){
          console.log(reqdata);
          let header = {
            headers:new HttpHeaders({
             'Content-Type': 'application/json-patch+json',
            })
          }
          return this.httpService.postService(`User/ChangePassword`, reqdata, false, header)
        }

}
