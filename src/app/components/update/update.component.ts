import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title:any;
  description:any;
  noteId:any;

  constructor(
    private note: NoteservicesService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.title = data.title,
      this.description = data.description,
      this.noteId = data.noteId
    }

  ngOnInit(): void {
    console.log("from display note single note", this.data);
    this.dialogRef.updateSize('40%', '43%');
  }

  onClose() {

    let reqData = {
      title: this.title,
      description: this.description,
      bgColor: "colourName",
    }
    
    this.note.updateNote(reqData, this.noteId).subscribe((response: any) => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.dialogRef.close();
  } 

}
