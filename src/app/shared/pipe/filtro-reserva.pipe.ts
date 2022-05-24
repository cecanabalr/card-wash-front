import { Pipe, PipeTransform } from '@angular/core';
import {Reserva} from '@reserva/shared/model/reserva';

@Pipe({
  name: 'filtroReserva'
})
export class FiltroReservaPipe implements PipeTransform {

  transform(reservas: Reserva[], page: number = 0, search: string): Reserva[] {
    if (search.length === 0){
      return reservas.slice( page, page + 5).reverse();
    }
    const  filterReserva = reservas.filter(reserva => reserva.placa.includes(search));
    return filterReserva.slice( page, page + 5).reverse();
  }

}
