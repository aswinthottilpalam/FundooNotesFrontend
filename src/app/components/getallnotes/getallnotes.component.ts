import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {

  NoteList = []
  constructor(private note:NoteservicesService) { }

  ngOnInit(): void {
    this.getallNotes()
  }

  getallNotes() {
    this.note.getallNotes().subscribe((response: any) =>{
      console.log(response);
      this.NoteList = response.data;
      console.log(this.NoteList);
      this.NoteList.reverse();

      this.NoteList = this.NoteList.filter((object: any) => {
        return object.isArchieve === false && object.isTrash === false;
      } )
      
    })

  }

  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getallNotes()
  }

}
