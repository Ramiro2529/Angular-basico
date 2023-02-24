import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interfaces/dbz.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor() {

  }

  nuevo: Personaje = {
    nombre: 'Maestro roshi',
    poder: 34,
  };


}
