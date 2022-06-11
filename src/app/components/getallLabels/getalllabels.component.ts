import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/services/labelService/label.service';

@Component({
  selector: 'app-getalllabels',
  templateUrl: './getalllabels.component.html',
  styleUrls: ['./getalllabels.component.scss']
})
export class GetalllabelsComponent implements OnInit {

  LabelList = []

  constructor(private label: LabelService) { }

  ngOnInit(): void {
    this.getallLabels();
  }
  getallLabels() {
    this.label.getallLabels().subscribe((response: any) =>{
      console.log(response);
      this.LabelList = response.data;
      console.log(this.LabelList);
      // this.LabelList.reverse();
      
    })

  }

}
