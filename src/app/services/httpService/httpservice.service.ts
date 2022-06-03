import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseurl=environment.baseUrl;
  constructor(private httpClient : HttpClient) { }

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={} ){
    return this.httpClient.post(this.baseurl+url,reqdata,token && httpOptions); 
  }

  putService(url: string, reqData: any, token: boolean = false, headers: any) {
    console.log(reqData)
    return this.httpClient.put(this.baseurl+url, reqData, token && headers)
  }

  getService(url: string, token: boolean = false, headers: any) {
    return this.httpClient.get(this.baseurl + url,token && headers )
  }

  deleteService(url: string, token: boolean = false, headers: any) {
    return this.httpClient.delete(this.baseurl + url,token && headers )
  }

}
