import { TestBed } from '@angular/core/testing';

import { AgendaService } from './agenda.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpService} from '@core-service/http.service';
import {environment} from '../../../../../environments/environment';
import {Agenda} from '@agenda/shared/model/agenda';
import {HttpResponse} from '@angular/common/http';

describe('AgendaService', () => {
  let service: AgendaService;
  let httpMock: HttpTestingController;
  const apiEndpointAgendaConsulta = `${environment.endpoint}/agendas`;
  const apiEndpointAgenda = `${environment.endpoint}/agenda`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AgendaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia listar agendas', () => {
    const dummyAgendas = [
      new Agenda(1, '2022-05-20', '2022-05-20'),
      new Agenda(1, '2022-05-20', '2022-05-20')
    ];
    service.listar().subscribe(servico => {
      expect(servico.length).toBe(2);
      expect(servico).toEqual(dummyAgendas);
    });
    const req = httpMock.expectOne(apiEndpointAgendaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAgendas);
  });

  it('deberia listar agendas', () => {
    const dummyAgendas = [
      new Agenda(1, '2022-05-20', '2022-05-20'),
      new Agenda(1, '2022-05-20', '2022-05-20')
    ];
    service.buscarPorFecha('2022-05-20').subscribe(servico => {
      expect(servico.length).toBe(2);
      expect(servico).toEqual(dummyAgendas);
    });
    const req = httpMock.expectOne(`${apiEndpointAgendaConsulta}/2022-05-20`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyAgendas);
  });

  it('deberia crear un agenda', () => {
    const dummyAgenda = new Agenda(1, '2022-05-20', '2022-05-20');
    service.guardar(dummyAgenda).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointAgenda);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
