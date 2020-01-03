import {Component, TemplateRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  check = '';
  id = '';
  pw = '';
  constructor() {}

  Login() {
    console.log(this.id,this.pw);
    if(this.id, this.pw){
      this.check = 'landing';
    }
    return this.check
  }
}
