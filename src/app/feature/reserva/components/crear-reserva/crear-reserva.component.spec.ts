import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CrearReservaComponent } from './crear-reserva.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '@core-service/http.service';
import {ReservaService} from '@reserva/shared/service/reserva.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {ListarReservaPlacaComponent} from '@reserva/components/listar-reserva-placa/listar-reserva-placa.component';

describe('CrearReservaComponent', () => {
  let component: CrearReservaComponent;
  let fixture: ComponentFixture<CrearReservaComponent>;
  let reservaService: ReservaService;
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CrearReservaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'reserva/listar/AAA123', component: ListarReservaPlacaComponent}
        ]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ReservaService, HttpService],
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

});
