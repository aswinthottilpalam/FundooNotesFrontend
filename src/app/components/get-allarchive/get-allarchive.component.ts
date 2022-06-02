import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-allarchive',
  templateUrl: './get-allarchive.component.html',
  styleUrls: ['./get-allarchive.component.scss']
})
export class GetAllarchiveComponent implements OnInit {

  NoteList = []
  constructor() { }

  ngOnInit(): void {
    this.getAllArchiveNotes()
  }

  getAllArchiveNotes() {
    console.log("call the Api here");
    this.NoteList = [  ]
  }

}
