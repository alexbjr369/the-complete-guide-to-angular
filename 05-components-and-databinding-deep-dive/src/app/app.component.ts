import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements: any = [
    { type: 'server', name: 'Test server', content: 'just a test!' },
  ];
}
