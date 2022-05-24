import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import {Servicio} from '../model/servicio';
import {Observable} from 'rxjs';

@Injectable()
export class ServicioService {

  constructor(protected http: HttpService) { }

  public guardar(servicio: Servicio) {
   return this.http.doPost<Servicio, boolean>(`${environment.endpoint}/servicio`, servicio,
      this.http.optsName('crear'));
  }
  public listarServicios(): Observable<Servicio[]>{
    return this.http.doGet<Servicio[]>(`${environment.endpoint}/servicios`,
      this.http.optsName('listar serivicios'));
  }
}
