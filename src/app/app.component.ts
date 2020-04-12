import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data  =  [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
 
  onSubmitClick(UserLoginData)
  {
    alert(UserLoginData.Username_text);
  }
}
