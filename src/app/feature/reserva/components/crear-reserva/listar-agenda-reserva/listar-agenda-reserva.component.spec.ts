import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendaReservaComponent } from './listar-agenda-reserva.component';
import {CommonModule} from "@angular/common";
import {HttpService} from "@core-service/http.service";
import {AgendaService} from "@agenda/shared/service/agenda.service";
import {SharedModule} from "@shared/shared.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListarAgendaReservaComponent', () => {
  let component: ListarAgendaReservaComponent;
  let fixture: ComponentFixture<ListarAgendaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
