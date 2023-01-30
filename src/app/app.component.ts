import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='assignment';
  show = false;
  log: number[] = [];
  click: number = 0;


showName(){
  this.show= !this.show;
  this.click += 1;
  this.log.push(this.click);
}
}