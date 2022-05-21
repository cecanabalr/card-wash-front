import { Pipe, PipeTransform } from '@angular/core';
import {Reserva} from "@reserva/shared/model/reserva";

@Pipe({
  name: 'filtroReserva'
})
export class FiltroReservaPipe implements PipeTransform {

  transform(reservas: Reserva[], page: number = 0): Reserva[] {
    return reservas.slice( page, page + 5).reverse();
  }

}
