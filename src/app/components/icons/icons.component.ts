import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';
import { GetAllarchiveComponent } from '../get-allarchive/get-allarchive.component';
import { GetAlltrashnoteComponent } from '../get-alltrashnote/get-alltrashnote.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})


export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  @Output() iconstodisplay = new EventEmitter<string>()
  noteId: any
  isDeleted: boolean = false;
  isArchived: boolean = false;
  color: any
  constructor(private note: NoteservicesService, private activatedroute: ActivatedRoute, private snackbar: MatSnackBar) { }

  colorarray = [{ Colorcode: "rgb(255, 255, 255)", name: "White" },
  { Colorcode: "rgb(242, 139, 130)", name: "cream" },
  { Colorcode: "rgb(251, 188, 4)", name: "yellow" },
  { Colorcode: "rgb(255, 244, 117)", name: "lightYellow" },
  { Colorcode: "rgb(204, 255, 144)", name: "lightGreen" },
  { Colorcode: "rgb(167, 255, 235)", name: "aqua" },
  { Colorcode: "rgb(203, 240, 248)", name: "lightBlue" },
  { Colorcode: "rgb(174, 203, 250)", name: "darkBlue" },
  { Colorcode: "rgb(87, 169, 161)", name: "greenish" },
  { Colorcode: "rgb(223, 140, 229)", name: "violet" }];


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

  onDelete() {
    let reqData = {
      noteId: [this.noteCard.noteId],
      isDeleted: true,
    }
    // console.log(reqData);
    this.note.deleteNote(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);

      this.snackbar.open('note trashed sucessfully', '', {
        duration: 2000,
      });

    }, error => {
      console.log(error);
    });

  }

  onArchive() {
    let reqData = {
      noteId: [this.noteCard.noteId],
      isArchived: true,
    }
    // console.log(reqData);
    this.note.archiveNote(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);

      this.snackbar.open('note archived sucessfully', '', {
        duration: 2000,
      });
    }, error => {
      console.log(error);
    });
  }



  changeColor(colour: any) {
    console.log(colour);
    this.note.colorPallete(this.noteCard.noteId, colour).subscribe((res: any) => {
      console.log(res);
      this.iconstodisplay.emit("hello");
      this.snackbar.open('color changed Successfully !', '', {
        duration: 2000,
      })
    })
  }

 

  deleteForever() {
    let reqData = {
       noteId:[this.noteCard.noteId],
    }
    console.log(reqData);
    this. note.deleteForever(reqData).subscribe((response: any) => {
      console.log(response); 
      this.iconstodisplay.emit(response)

      this.snackbar.open('note Deleted Forever sucessfull !', '', {
        duration: 2000,
      });
    })
  }

  onRestore() {
    let reqData = {
      noteId:[this.noteCard.noteId],
      isDeleted: false,
    }
    console.log('Restore',reqData);

    this. note.deleteNote(reqData).subscribe((response: any) => {
      console.log(response); 
      this.iconstodisplay.emit(response)

      this.snackbar.open('note restored sucessfully !', '', {
        duration: 2000,
      });

    })
  }

  onUnarchive() {
    let reqData = {
      noteId: [this.noteCard.noteId],
      isArchived: false,
    }
    // console.log(reqData);
    this.note.archiveNote(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);

      this.snackbar.open('note Unarchived sucessfully', '', {
        duration: 2000,
      });
    }, error => {
      console.log(error);
    });
  }


}
