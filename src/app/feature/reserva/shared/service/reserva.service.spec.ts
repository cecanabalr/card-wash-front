import { TestBed } from '@angular/core/testing';

import { ReservaService } from './reserva.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from '@core-service/http.service';
import {environment} from '../../../../../environments/environment';
import {Agenda} from '@agenda/shared/model/agenda';
import {Reserva} from '@reserva/shared/model/reserva';
import {Servicio} from '@servicio/shared/model/servicio';
import {HttpResponse} from '@angular/common/http';

describe('ReservaService', () => {
  let service: ReservaService;
  let httpMock: HttpTestingController;
  const apiEndpointReservaConsulta = `${environment.endpoint}/reservas`;
  const apiEndpointReserva = `${environment.endpoint}/reserva`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReservaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar reservas', () => {
    const dummyReservas = [
      new Reserva('carlos', 'AAA123',
        new Agenda(1, '', ''),
        new Servicio(1, '', 20000) , 20000, '')
    ];
    service.buscarTodasLasReservas().subscribe(servico => {
      expect(servico.length).toBe(1);
      expect(servico).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(apiEndpointReservaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia listar reservas por placa', () => {
    const dummyReservas = [
      new Reserva('carlos', 'AAA123',
        new Agenda(1, '', ''),
        new Servicio(1, '', 20000) , 20000, '')
    ];
    service.buscarPorFecha('AAA123').subscribe(servico => {
      expect(servico.length).toBe(1);
      expect(servico).toEqual(dummyReservas);
    });
    const req = httpMock.expectOne(`${apiEndpointReservaConsulta}/AAA123`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyReservas);
  });

  it('deberia crear un reserva', () => {
    const dummyReserva = new Reserva('carlos', 'AAA123',
      new Agenda(1, '', ''),
      new Servicio(1, '', 20000) , 20000, '');
    service.guardar(dummyReserva).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointReserva);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
