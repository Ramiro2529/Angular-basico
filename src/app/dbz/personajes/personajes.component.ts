import { DbzService } from './../services/dbz.service';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent {

  constructor(private DbzService:DbzService){

  }

// @Input()
//   personajes:Personaje[]=[];

get personajes(){
  return this.DbzService.personajes;
}
}
