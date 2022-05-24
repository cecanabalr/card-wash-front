import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListarReservaPlacaComponent } from './listar-reserva-placa.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpService} from '@core-service/http.service';
import {ReservaService} from '@reserva/shared/service/reserva.service';
import {SharedModule} from '@shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Agenda} from '../../../agenda/shared/model/agenda';
import {Reserva} from '../../shared/model/reserva';
import {Servicio} from '../../../servicio/shared/model/servicio';

describe('ListarReservaPlacaComponent', () => {
  let component: ListarReservaPlacaComponent;
  let fixture: ComponentFixture<ListarReservaPlacaComponent>;
  let reservaService: ReservaService;
  beforeEach(waitForAsync(  () => {
    TestBed.configureTestingModule({
      declarations: [ ListarReservaPlacaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule
      ],
      providers: [ReservaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaPlacaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'buscarTodasLasReservas').and.returnValue(
      of([new Reserva('carlos', 'AAA123',
        new Agenda(1, '2022-05-20', '2022-05-20'),
        new Servicio(1, '', 0), 20000, '2022-05-20')])
    );
    spyOn(reservaService, 'buscarPorFecha').and.returnValue(
      of([new Reserva('carlos', 'AAA123',
        new Agenda(1, '2022-05-20', '2022-05-20'),
        new Servicio(1, '', 0), 20000, '2022-05-20')])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should listar todos las reservas', () => {
    expect(component).toBeTruthy();
    component.placa = null;
    component.ngOnInit();
    expect(component.reservas).toEqual([new Reserva('carlos', 'AAA123',
      new Agenda(1, '2022-05-20', '2022-05-20'),
      new Servicio(1, '', 0), 20000, '2022-05-20')]);
  });
  it('should listar todos las reservas por placa', () => {
    expect(component).toBeTruthy();
    component.placa = 'AAA123';
    component.ngOnInit();
    expect(component.reservas).toEqual([new Reserva('carlos', 'AAA123',
      new Agenda(1, '2022-05-20', '2022-05-20'),
      new Servicio(1, '', 0), 20000, '2022-05-20')]);
  });

  it('should listar todos las reservas de la pagina siguiente',  () => {
    expect(component).toBeTruthy();
    component.nextPage();
    expect(component.page).toEqual(5);
  });

  it('should listar todos las reservas de la pagina anterior',  () => {
    expect(component).toBeTruthy();
    component.page = 5;
    component.prevPage();
    expect(component.page).toEqual(0);
  });
  it('should listar todos las reservas primera pagina',  () => {
    expect(component).toBeTruthy();
    component.prevPage();
    expect(component.page).toEqual(0);
  });

  it('should listar todos las reservas por filtro',  () => {
    expect(component).toBeTruthy();
    component.onSearchReserva('AAA123');
    expect(component.search).toEqual('AAA123');
  });
});
