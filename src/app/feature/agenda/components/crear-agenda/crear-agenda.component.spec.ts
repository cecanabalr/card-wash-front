import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgendaComponent } from './crear-agenda.component';
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "@core-service/http.service";
import {AgendaService} from "@agenda/shared/service/agenda.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CrearAgendaComponent', () => {
  let component: CrearAgendaComponent;
  let fixture: ComponentFixture<CrearAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgendaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AgendaService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
