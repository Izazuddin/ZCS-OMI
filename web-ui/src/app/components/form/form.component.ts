import { FormInstructInfo } from './../../models/ui-domain/form-instruction-info';
import { Component, OnInit } from '@angular/core';
import { FormInfo } from 'src/app/models/ui-domain/form-info';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form:FormInfo;
  instruction:FormInstructInfo = new FormInstructInfo();
  errors:string[]=[];
  constructor() {
    this.form = new FormInfo();
   }

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    this.errors=[];
    if(this.form.name === undefined || this.form.name==="")
    {
        this.errors.push("Name is required");
    }
    if(!this.form.relation.isGuardian && !this.form.relation.isParent && !this.form.relation.isRelationOther)
    {
      this.errors.push("Patient relationshipt is mandatory");
    }
    console.log(this.errors)
  }

}
