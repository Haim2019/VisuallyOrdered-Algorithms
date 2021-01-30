import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Learning Angular';
  private heart = '<3';

  getTitle(){
    return this.title;
  }
  getHeart(){
    return this.heart;
  }
}
