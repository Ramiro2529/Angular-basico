import { Component } from '@angular/core';
@Component({

  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

nombre:string='Batman'
edad:number=40

get nombreCpitalizado():string{

  return this.nombre.toUpperCase()
}

obtenerNombre():string{

  return `
  ${this.nombre} - ${this.edad}
  `;
}

cambiarNombre():void{
this.nombre='Spider man'

}

cambiarEdad():void{
  this.edad=70;
}
}
