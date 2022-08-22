import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partidasAnteriores'
})
export class PartidasPipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
    if (filtro) {
      filtro = filtro.toLowerCase();
      console.log(filtro);

      value.sort((a,b) => {
        return b.data_realizacao_iso < a.data_realizacao_iso ? -1 : a.data_realizacao_iso > b.data_realizacao_iso ? 1 : 0;
      })
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
