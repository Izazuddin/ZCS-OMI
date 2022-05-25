import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import{MatCheckboxModule} from '@angular/material/checkbox'
import { InfoComponent } from './info/info.component';
import { InfoDialogContentComponent } from './info-dialog-content/info-dialog-content.component'



@NgModule({
  declarations: [
    FormComponent,
    InfoComponent,
    InfoDialogContentComponent
  ],
  exports:[FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule
  ]
})
export class ComponentsModule { }
