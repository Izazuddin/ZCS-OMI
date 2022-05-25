import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog-content',
  templateUrl: './info-dialog-content.component.html',
  styleUrls: ['./info-dialog-content.component.css']
})
export class InfoDialogContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:string) { }

  ngOnInit(): void {
  }

}
