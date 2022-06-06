import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';

@Component({
  selector: 'app-get-allarchive',
  templateUrl: './get-allarchive.component.html',
  styleUrls: ['./get-allarchive.component.scss']
})
export class GetAllarchiveComponent implements OnInit {

  ArchiveList = []
  constructor( private note: NoteservicesService ) { }
  @Output() displaytogetallnotes=new EventEmitter<string>();


  ngOnInit(): void {
    this.getAllArchiveNotes()
  }

  getAllArchiveNotes() {
    this.note.getallNotes().subscribe((response: any) =>{
      console.log(response);
      this.ArchiveList = response.data;
      console.log(this.ArchiveList);
      this.ArchiveList.reverse();
      this.displaytogetallnotes.emit(response);

      

      this.ArchiveList = this.ArchiveList.filter((object: any) => {
        return  object.isArchieve === true;
      } )
    })
  }

  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllArchiveNotes()
  }

}
