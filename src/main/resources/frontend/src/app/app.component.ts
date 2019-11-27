import {Component, TemplateRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  Login() {
    localStorage.setItem('username','thai');
    console.log(localStorage.getItem('username'));
  }
}
