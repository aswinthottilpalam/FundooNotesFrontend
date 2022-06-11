import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/services/labelService/label.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  add = false;
  LabelName: any;

  @Input() LabelArray: any;
  constructor(
    private label: LabelService,
    public dialogRef: MatDialogRef<UpdateComponent>,) {
    }

  ngOnInit(): void {
    // console.log("from display note single note", this.data);
    this.dialogRef.updateSize('30%', '30%');
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  inpuTBox(){
    this.add=!this.add;
  }

  addLabel(){
    let reqData = {
      LabelName: this.LabelName,
    }
    console.log(reqData);
    this.label.createLabel(reqData).subscribe((response:any) => {
      console.log(response);
    })

    // this.dialogRef.close();
  }

}
