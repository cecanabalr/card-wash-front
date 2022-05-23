import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServicioReservaComponent } from './listar-servicio-reserva.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpService} from "@core-service/http.service";
import {ServicioService} from "@servicio/shared/service/servicio.service";

describe('ListarServicioReservaComponent', () => {
  let component: ListarServicioReservaComponent;
  let fixture: ComponentFixture<ListarServicioReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarServicioReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [ServicioService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
