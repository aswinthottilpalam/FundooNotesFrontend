import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/dataService/data.service';
import { LabelService } from 'src/app/services/labelService/label.service';
import { MatDialog } from '@angular/material/dialog';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnDestroy {
  // filteredString:string = '';
  message:any;
  value:any;
  toggleIconSrch = false;
  NoteId: any;
  LabelList:any = [];

  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerContent = Array.from({length: 50}, () =>
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
   private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router, private snackBar: MatSnackBar, 
    private data:DataService, public dialog: MatDialog, private label: LabelService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
   
   ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getallLabels();
  }

  searchtitle(event: any) {
    console.log("input in search field ===",event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }


  OnLogout(){
    localStorage.removeItem("token");
    this.route.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!','..', {
      duration: 2000,
    });
  }

  onIconToggle(){
    this.toggleIconSrch = !this.toggleIconSrch;
  }



  editLabelDialog(): void {
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '250px',
      data: this.LabelList,
     // data from display note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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



