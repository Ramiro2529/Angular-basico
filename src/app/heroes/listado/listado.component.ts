import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spider man', 'Batman', 'Dare devil'];
  heroeBorrado: string | undefined = '';
  heroesLength = this.heroes.length;

  borrarHeroe(): void {
    const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = heroeBorrado;

  }
}
