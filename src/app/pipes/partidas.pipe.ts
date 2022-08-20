import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partidas'
})
export class PartidasPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
    if (filtro) {
      filtro = filtro.toLowerCase();
      console.log(filtro);
      return value.filter(a =>
        a.campeonato.slug.toLowerCase().indexOf(filtro) >= 0
      );
    } else {
      // Quando filtro for vazio ou nulo,
      // retornamos o próprio array
      return value;
    }
  }
}
