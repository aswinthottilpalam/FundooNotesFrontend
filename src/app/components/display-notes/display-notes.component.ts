import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  constructor() { }
  @Input() NotesArray: any;

  ngOnInit(): void {
  }

}
