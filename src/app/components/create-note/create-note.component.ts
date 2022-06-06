import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteservicesService } from 'src/app/services/noteService/noteservices.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  show = false;

  submitted = false;
  titleImgOne = true;
  titleImgTwo = false;
  title: any;
  description: any;

  constructor(private formBuilder: FormBuilder, private note: NoteservicesService) { }
  @Output() displaytogetallnotes=new EventEmitter<string>();


  ngOnInit(): void {

  }

  hideAndShow() {
    console.log("hiding the description")
    this.show = !this.show;
    this.titleImgOne = false;
    this.titleImgTwo = true;
  }

  onclose() {
    this.titleImgOne = true;
    this.titleImgTwo = false;
    this.show = false;

    let reqData = {
      title: this.title,
      description: this.description,
      bgcolor:"colourName"
    }
    this.note.createnote(reqData).subscribe((response: any) => {
      console.log(response);
      this.displaytogetallnotes.emit(response)
    }, error => {
      console.log(error);
    })


  }


}
