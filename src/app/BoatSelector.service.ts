import { Injectable } from '@angular/core';
import { Engine } from './engine.model';
import { Owner } from './owner.model';

@Injectable()
export class BoatSelectorService {
  private b: Boat;

  constructor() {}

  createBoat(): Boat {
    this.b = new Boat();
    this.b.engine.outboard = true;
    this.b.engine.horsePower = 90;
    this.b.owner.name = 'Bruce';
    return this.b;
  }
}

export class Boat {

  public engine: Engine;
  public owner: Owner;
  public brand = 'Eastern';

  constructor() {
    this.engine = new Engine();
    this.owner = new Owner();
  }

  // Method using the engine and tires
  yachtingAbout(): string {
    return ` Motoring about in Casco bay in ${this.brand} boat with ` +
      `${this.engine.horsePower} horsepower owned by ${this.owner.name}`;
  }
}
