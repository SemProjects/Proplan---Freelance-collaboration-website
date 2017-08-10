import { Component } from '@angular/core';
import {IdeasService } from './ideas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[IdeasService]
})
export class AppComponent {
  title = 'app works!';
}
