import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListarAgendaReservaComponent } from './listar-agenda-reserva.component';
import {CommonModule} from '@angular/common';
import {HttpService} from '@core-service/http.service';
import {AgendaService} from '@agenda/shared/service/agenda.service';
import {SharedModule} from '@shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Agenda} from '../../../../agenda/shared/model/agenda';

describe('ListarAgendaReservaComponent', () => {
  let component: ListarAgendaReservaComponent;
  let fixture: ComponentFixture<ListarAgendaReservaComponent>;
  let agendaService: AgendaService;
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ ListarAgendaReservaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule
      ],
      providers: [AgendaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAgendaReservaComponent);
    component = fixture.componentInstance;
    agendaService = TestBed.inject(AgendaService);
    spyOn(agendaService, 'buscarPorFecha').and.returnValue(
      of([new Agenda(1, '2022-05-20', '2022-05-20')])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should listar todos las agendas por fecha',  () => {
    expect(component).toBeTruthy();
    component.mostrarAgenda('2022-05-20');
    expect(component.agendas).toEqual([new Agenda(1, '2022-05-20', '2022-05-20')]);
  });

  it('should listar todos las  reservas agendas de la pagina siguiente',  () => {
    expect(component).toBeTruthy();
    component.nextPage();
    expect(component.page).toEqual(5);
  });

  it('should listar todos las reservas agendas de la pagina anterior',  () => {
    expect(component).toBeTruthy();
    component.page = 5;
    component.prevPage();
    expect(component.page).toEqual(0);
  });
  it('should listar todos las agendas primera pagina',  () => {
    expect(component).toBeTruthy();
    component.prevPage();
    expect(component.page).toEqual(0);
  });
});
