import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataService/data.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  
  @Input() NotesArray: any;
  @Output() displaytogetallnotes=new EventEmitter<string>();
  sentmsg: any;
  // filteredString:string = '';
  message:any;
  searchword: any;
  subscription: any;
  constructor(public dialog: MatDialog, private data: DataService) { }


  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
  }

  openDialog(noteCard:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: noteCard // data from display note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }

}
