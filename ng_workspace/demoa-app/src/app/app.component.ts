import { Component } from '@angular/core';

@Component({
  selector: 'my-root', // should follow kebab style // between -
  templateUrl: './app.component.html', // templateUrl: 'appcomponent.html'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end';
  location = 'Madurai';

onBoxValueChange(paramData: any) 
{
  console.log("app component: " + paramData.value);
}  
}
