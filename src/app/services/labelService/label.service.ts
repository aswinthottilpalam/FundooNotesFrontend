import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  token: any;

  constructor(private httpService: HttpserviceService, ) {
    this.token = localStorage.getItem("token")
   }


    // Create label section
  createLabel(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.postService(`api/Label/Createlabel/${reqData.LabelName}`, reqData, true, header);
  }

    // getall labels section 
    getallLabels() {
      console.log('token', this.token);
      let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json-patch+json',
          'Authorization': 'Bearer ' + this.token
        })
      }
      return this.httpService.getService('api/Label/Getlabel', true, header);
    }

}
