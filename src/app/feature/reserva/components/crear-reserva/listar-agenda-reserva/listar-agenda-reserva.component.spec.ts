import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendaReservaComponent } from './listar-agenda-reserva.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "@core-service/http.service";
import {AgendaService} from "@agenda/shared/service/agenda.service";
import {SharedModule} from "@shared/shared.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('ListarAgendaReservaComponent', () => {
  let component: ListarAgendaReservaComponent;
  let fixture: ComponentFixture<ListarAgendaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAgendaReservaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        SharedModule
      ],
      providers: [AgendaService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAgendaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
