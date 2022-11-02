import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfe-root';
  elementMfe1 = 'http://localhost:9001/main.js';
  elementMfe2 = 'http://localhost:9002/main.js';
}
