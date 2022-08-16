import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeArtilharia'
})
export class PipeArtilhariaPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
    if (filtro) {
      filtro = filtro.toUpperCase();

      return value.filter(a =>
        a.atleta.nome_popular.toUpperCase().indexOf(filtro) >= 0
      );
    } else {
      // Quando filtro for vazio ou nulo,
      // retornamos o próprio array
      return value;
    }
  }
}
