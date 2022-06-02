import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-alltrashnote',
  templateUrl: './get-alltrashnote.component.html',
  styleUrls: ['./get-alltrashnote.component.scss']
})
export class GetAlltrashnoteComponent implements OnInit {

  NoteList = []
  constructor() { }

  ngOnInit(): void {
    this.getAllTrashNotes()
  }

  getAllTrashNotes() {
    console.log("call the Api here");
    this.NoteList = [  ]
  }

}
