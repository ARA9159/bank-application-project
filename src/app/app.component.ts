import { Component } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CREATE ACCOUNT';
  aform:FormGroup;
  constructor(){
    this.aform=new FormGroup({fname:new FormControl("ENTER FIRST NAME",[Validators.required]),
  lname:new FormControl("ENTER LAST NAME",[Validators.required]),
  age:new FormControl("ENTER AGE",[Validators.required,Validators.pattern('[0-9]+')]),
  cnum:new FormControl("ENTER THE MOBILE NUMBERE",[Validators.required,Validators.pattern('[0-9]{10}')]),
  anum:new FormControl("ENTER THE ADHAR NUMBER",[Validators.required,Validators.pattern('[0-9]+')]),
  adres:new FormControl("ENTER THE DOOR NUMBER",[Validators.required]),
  city:new FormControl("ENTER THE CITY NAME",[Validators.required]),
  code:new FormControl("ENTER THE POSTAL CODE",[Validators.required,Validators.pattern('[0-9]{6}')])
  });
  }
}
