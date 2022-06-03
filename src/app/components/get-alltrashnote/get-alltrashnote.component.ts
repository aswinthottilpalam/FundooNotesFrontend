import { Component, OnInit } from '@angular/core';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';

@Component({
  selector: 'app-get-alltrashnote',
  templateUrl: './get-alltrashnote.component.html',
  styleUrls: ['./get-alltrashnote.component.scss']
})
export class GetAlltrashnoteComponent implements OnInit {

  TrashList = []
  constructor( private note: NoteservicesService) { }

  ngOnInit(): void {
    this.getAllTrashNotes()
  }

  getAllTrashNotes() {
    this.note.getallNotes().subscribe((response: any) =>{
      console.log(response);
      this.TrashList = response.data;
      console.log(this.TrashList);

      this.TrashList = this.TrashList.filter((object: any) => {
        return  object.isTrash === true;
      } )
    })

  }

}
