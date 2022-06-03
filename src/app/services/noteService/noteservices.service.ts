import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  token: any;

  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem("token")
  }

  // Create note section
  createnote(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }

    return this.httpService.postService('Note/CreateNote', reqdata, true, header);
  }


  // getall note section 
  getallNotes() {
    console.log('token', this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Note/GetAllNotes', true, header);
  }

  // Update note section
  updateNote(reqData:any, noteId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`Note/UpdateNote/${noteId}/`, reqData, true, header); 

  }


    // Delete note section
    deleteNote(reqData:any) {
      console.log(reqData)
      let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json-patch+json',
          'Authorization': 'Bearer ' + this.token
        })
      }
      return this.httpService.putService(`Note/TrashNote/${reqData.noteId}`, reqData, true, header); 

    }

      // Archive note section
      archiveNote(reqData:any) {
        console.log(reqData)
        let header = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json-patch+json',
            'Authorization': 'Bearer ' + this.token
          })
        }
        return this.httpService.putService(`Note/ArchiveNote/${reqData.noteId}`, reqData, true, header); 
  
      }



}
