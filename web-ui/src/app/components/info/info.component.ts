import { InfoDialogContentComponent } from './../info-dialog-content/info-dialog-content.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()
  info:string="No info supplied";

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onClick()
  {
    var config = new MatDialogConfig();
    config.data = this.info;
    const dialogRef = this.dialog.open(InfoDialogContentComponent, config);
  }

}
