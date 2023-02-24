import { Personaje } from './../interfaces/dbz.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class DbzService {
  constructor() {}

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 10000,
    },
    {
      nombre: 'Gohan',
      poder: 18000,
    },
  ];
  // objetos mandados por referencia
  // Rompe la referencia ...
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje)
  }
}
