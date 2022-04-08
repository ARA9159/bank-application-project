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
    this.aform=new FormGroup({fname:new FormControl(null,[Validators.required]),
  lname:new FormControl(null,[Validators.required]),
  age:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{2}')]),
  dob:new FormControl(null,[Validators.required]),
  cnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]),
  anum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
  adres:new FormControl(null,[Validators.required]),
  cty:new FormControl(null,[Validators.required]),
  code:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{6}')])
  });
  }
  get fname(){
    return this.aform.get('fname');
  }
  get lname(){
    return this.aform.get('lname');
  }
  get age(){
    return this.aform.get('age');
  }
  get dob(){
    return this.aform.get('dob');
  }
  get cnum(){
    return this.aform.get('cnum');
  }
  get anum(){
    return this.aform.get('anum');
  }
  get adres(){
    return this.aform.get('adres');
  }
  get cty(){
    return this.aform.get('cty');
  }
  get code(){
    return this.aform.get('code');
  }
}
