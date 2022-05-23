import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServicioReservaComponent } from './listar-servicio-reserva.component';
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpService} from "@core-service/http.service";
import {ServicioService} from "@servicio/shared/service/servicio.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListarServicioReservaComponent', () => {
  let component: ListarServicioReservaComponent;
  let fixture: ComponentFixture<ListarServicioReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarServicioReservaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
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
