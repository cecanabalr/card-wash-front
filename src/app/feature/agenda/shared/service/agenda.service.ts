import { Injectable } from '@angular/core';
import {HttpService} from '@core-service/http.service';
import {environment} from 'src/environments/environment';
import {Agenda} from '@agenda/shared/model/agenda';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(protected http: HttpService) {
  }

  public guardar(agenda: Agenda) {

    return this.http.doPost<Agenda, string>(`${environment.endpoint}/agenda`, agenda,
      this.http.optsName('crear'));
  }

  public buscarPorFecha(fecha: string): Observable<Agenda[]> {
    return this.http.doGet<Agenda[]>(`${environment.endpoint}/agendas/${fecha}`, this.http.optsName('buscarPorFecha'));
  }

  public listar(): Observable<Agenda[]> {
    return this.http.doGet<Agenda[]>(`${environment.endpoint}/agendas`, this.http.optsName('listar'));
  }

}
