import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendaComponent } from './listar-agenda.component';
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {AgendaService} from "@agenda/shared/service/agenda.service";
import {HttpService} from "@core-service/http.service";
import {SharedModule} from "../../../../shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListarAgendaComponent', () => {
  let component: ListarAgendaComponent;
  let fixture: ComponentFixture<ListarAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAgendaComponent ],
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
    fixture = TestBed.createComponent(ListarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
