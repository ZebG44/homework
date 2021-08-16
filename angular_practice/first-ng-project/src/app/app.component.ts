import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-ng-Project';
  name: string = "G Gosik";
  itemList: string[] = ['apple', 'baseball', 'card', 'dog'];

  rectangle = {
    length: 4,
    width: 3,
    area: function () {
      return this.length * this.width
    }
  }
}
