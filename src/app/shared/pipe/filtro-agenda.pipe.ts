import { Pipe, PipeTransform } from '@angular/core';
import {Agenda} from "@agenda/shared/model/agenda";

@Pipe({
  name: 'filtroAgenda'
})
export class FiltroAgendaPipe implements PipeTransform {

  transform(agendas: Agenda[], page: number = 0): Agenda[] {
    return agendas.slice(page , page + 5);
  }

}
