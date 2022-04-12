import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rt-pcr-form',
  templateUrl: './rt-pcr-form.component.html',
  styleUrls: ['./rt-pcr-form.component.css']
})
export class RtPcrFormComponent implements OnInit {
  title = 'demob-app';
  store:any=[];
  input: any;
  headers=["Name","Aadhar Number","Date of Birth","City","Date & Time","Gender", "Labname",
  "Report Number","Result"];
  searchvalue:any=[];


  ngOnInit(): void {
  }
  
  fg = new FormGroup({
  name:new FormControl('',[Validators.required]),
  aadhar:new FormControl('',[Validators.required]),
  dob:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required]),
  datetime:new FormControl(),
  gender:new FormControl('',[Validators.required]),
  labname:new FormControl('',[Validators.required]),
  report:new FormControl('',[Validators.required]),
  result:new FormControl('',[Validators.required])
});
// onSubmit(){
//    console.warn(this.fg.value);
//  }
 
 add(){
  console.log(this.store.push(this.fg.value));
  console.log(this.store); 
  this.fg.reset();
  (<HTMLInputElement>document.getElementById("msg")).style.display="none";
}
  search(){
    console.log((<HTMLInputElement>document.getElementById("submit")).innerHTML);
    if((<HTMLInputElement>document.getElementById("find")).innerText==""){
      (<HTMLInputElement>document.getElementById("msg")).innerText="Oops!! No records found in our database🤐🤐";
    }
    this.input=(<HTMLInputElement> document.getElementById("find")).innerHTML;
    this.store.forEach((element:any) => {
      if(element.aadhar == this.input){
        this.searchvalue.push(element);
      }
    });
    (<HTMLInputElement>document.getElementById("find")).value="";
  }  
  removefield(){
   this.searchvalue = [];
}

}



