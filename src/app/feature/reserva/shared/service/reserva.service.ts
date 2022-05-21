import { Injectable } from '@angular/core';
import {HttpService} from "@core-service/http.service";
import {environment} from "src/environments/environment";
import {Reserva} from "@reserva/shared/model/reserva";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(protected http: HttpService) { }

  public guardar(reserva: Reserva) {
    return this.http.doPost<Reserva, number>(`${environment.endpoint}/reserva`, reserva,
      this.http.optsName('crear'));
  }

  public buscarPorFecha(placa: string): Observable<Reserva[]> {
    return this.http.doGet<Reserva[]>(`${environment.endpoint}/reservas/${placa}`, this.http.optsName('buscarPorPlaca'));
  }
}
