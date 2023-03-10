import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h1>
      La base es: <strong>{{ base }}</strong>
    </h1>

    <button (click)="acumular(base)">+{{ base }}</button>
    <button (click)="acumular(-base)">-{{ base }}</button>

    <span>{{ numero }}</span>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';

  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
