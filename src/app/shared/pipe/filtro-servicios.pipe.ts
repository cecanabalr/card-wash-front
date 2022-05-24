import { Pipe, PipeTransform } from '@angular/core';
import {Servicio} from '@servicio/shared/model/servicio';


@Pipe({
  name: 'filtroServicios'
})
export class FiltroServiciosPipe implements PipeTransform {

  transform(servicios: Servicio[], page: number = 0): Servicio[] {
    return servicios.slice( page, page + 5).reverse();
  }

}
