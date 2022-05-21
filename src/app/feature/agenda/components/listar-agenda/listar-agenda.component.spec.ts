import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendaComponent } from './listar-agenda.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgendaService} from "@agenda/shared/service/agenda.service";
import {HttpService} from "@core-service/http.service";
import {SharedModule} from "@shared/shared.module";

describe('ListarAgendaComponent', () => {
  let component: ListarAgendaComponent;
  let fixture: ComponentFixture<ListarAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAgendaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
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
