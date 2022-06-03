import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';
import { GetAllarchiveComponent } from '../get-allarchive/get-allarchive.component';
import { GetAlltrashnoteComponent } from '../get-alltrashnote/get-alltrashnote.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})


export class IconsComponent implements OnInit {
  @Input() noteCard:any;
  noteId: any
  isDeleted: boolean =false;
  isArchived: boolean = false;
  constructor( private note: NoteservicesService, private activatedroute: ActivatedRoute) { }


  ngOnInit(): void {
    // this.noteId=[this.noteCard.noteId]
    let del = this.activatedroute.snapshot.component;

    if (del == GetAlltrashnoteComponent) {
      this.isDeleted = true;
      console.log(this.isDeleted);
    }
    let arc = this.activatedroute.snapshot.component;
 
    if (arc == GetAllarchiveComponent) {
      this.isArchived = true;
      console.log(this.isArchived);
    }
  }

  onDelete(){
    let reqData = {
      noteId : [this.noteCard.noteId],
      isDeleted: true,
    }
    // console.log(reqData);
    this.note.deleteNote(reqData).subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });

  }

  onArchive() {
    let reqData = {
      noteId : [this.noteCard.noteId],
      isArchived: true,
    }
    // console.log(reqData);
    this.note.archiveNote(reqData).subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
