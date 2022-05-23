import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from '@core-service/http.service';
import {environment} from '../../../../../environments/environment';
import {Servicio} from '@servicio/shared/model/servicio';

import {HttpResponse} from '@angular/common/http';

describe('ServicioService', () => {
  let service: ServicioService;
  let httpMock: HttpTestingController;
  const apiEndpointServicioConsulta = `${environment.endpoint}/servicios`;
  const apiEndpointServicio = `${environment.endpoint}/servicio`;

  beforeEach(() => {
     const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioService, HttpService]
    });
     httpMock = injector.inject(HttpTestingController);
     service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar servicios', () => {
    const dummyServicios = [
      new Servicio(1, 'lavado', 20000),
      new Servicio(1, 'lavado2', 30000)
    ];
    service.listarServicios().subscribe(servico => {
      expect(servico.length).toBe(2);
      expect(servico).toEqual(dummyServicios);
    });
    const req = httpMock.expectOne(apiEndpointServicioConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyServicios);
  });

  it('deberia crear un servicio', () => {
    const dummyServicio = new Servicio(0, 'lavado', 20000);
    service.guardar(dummyServicio).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointServicio);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
