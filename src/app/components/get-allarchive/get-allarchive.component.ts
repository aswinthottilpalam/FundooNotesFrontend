import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';

@Component({
  selector: 'app-get-allarchive',
  templateUrl: './get-allarchive.component.html',
  styleUrls: ['./get-allarchive.component.scss']
})
export class GetAllarchiveComponent implements OnInit {

  ArchiveList = []
  constructor( private note: NoteservicesService ) { }

  ngOnInit(): void {
    this.getAllArchiveNotes()
  }

  getAllArchiveNotes() {
    this.note.getallNotes().subscribe((response: any) =>{
      console.log(response);
      this.ArchiveList = response.data;
      console.log(this.ArchiveList);
      this.ArchiveList.reverse();

      this.ArchiveList = this.ArchiveList.filter((object: any) => {
        return  object.isArchieve === true;
      } )
    })
  }

}
