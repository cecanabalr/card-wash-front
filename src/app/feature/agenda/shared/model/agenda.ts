export class Agenda {
  id: number;
  fechaInicio: string;
  fechaFin: string;

  constructor(id: number, fechaInicio: string, fechaFin: string) {
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.id = id;
  }
}
