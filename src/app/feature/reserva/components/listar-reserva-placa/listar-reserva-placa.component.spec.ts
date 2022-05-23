import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservaPlacaComponent } from './listar-reserva-placa.component';
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpService} from "@core-service/http.service";
import {ReservaService} from "@reserva/shared/service/reserva.service";
import {SharedModule} from "@shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListarReservaPlacaComponent', () => {
  let component: ListarReservaPlacaComponent;
  let fixture: ComponentFixture<ListarReservaPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
