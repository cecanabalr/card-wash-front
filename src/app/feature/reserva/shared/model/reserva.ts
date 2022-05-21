import {Agenda} from '@agenda/shared/model/agenda';
import {Servicio} from '@servicio/shared/model/servicio';

export class Reserva {
  nombre: string;
  placa: string;
  agenda: Agenda;
  servicio: Servicio;
  total: number;
  fechaCreacion: string;

  constructor(nombre: string, placa: string, agenda: Agenda, servicio: Servicio, total: number, fechaCreacion: string) {
    this.nombre = nombre;
    this.placa = placa;
    this.agenda = agenda;
    this.servicio = servicio;
    this.total = total;
    this.fechaCreacion = fechaCreacion;
  }
}
