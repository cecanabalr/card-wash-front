import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CrearReservaComponent } from './crear-reserva.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '@core-service/http.service';
import {ReservaService} from '@reserva/shared/service/reserva.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {
  ListarAgendaReservaComponent
} from '@reserva/components/crear-reserva/listar-agenda-reserva/listar-agenda-reserva.component';
import {FiltroAgendaPipe} from '@shared/pipe/filtro-agenda.pipe';
import {AgendaService} from '@agenda/shared/service/agenda.service';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent, ListarAgendaReservaComponent, FiltroAgendaPipe ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'reserva/listar/AAA123', component: CrearReservaComponent}
        ]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservaService, HttpService, AgendaService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReservaComponent);
    component = fixture.componentInstance;
    reservaService = TestBed.inject(ReservaService);
    spyOn(reservaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.reservaForm.valid).toBeFalsy();
  });

  it('Registrando reserva', () => {
    expect(component.reservaForm.valid).toBeFalsy();
    component.reservaForm.controls.nombre.setValue('carlos');
    component.reservaForm.controls.placa.setValue('AAA123');
    expect(component.reservaForm.valid).toBeTruthy();
    component.enviar();

    expect(component.idServicio).toEqual(0);
    expect(component.idAgenda).toEqual(0);
  });
  it('Obtener id del servicio', () => {
    expect(component).toBeTruthy();
    component.obtenerServicio(2);
    expect(component.idServicio).toEqual(2);
  });

  it('Obtener id de agenda', () => {
    expect(component).toBeTruthy();
    component.obtenerAgenda(100);
    expect(component.idAgenda).toEqual(100);
  });

  it('Enviar fecha a componente listar agenda reserva', () => {
    expect(component).toBeTruthy();
    component.onSearchDate('2022-05-20');
    expect(component.fecha).toEqual('2022-05-20');
  });
});
