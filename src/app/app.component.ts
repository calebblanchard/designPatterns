import { Component } from '@angular/core';
import { BoatSelectorService } from './BoatSelector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title;
  constructor(bs: BoatSelectorService) {
    const boat = bs.createBoat();
    this.title = boat.yachtingAbout();
  }
}

