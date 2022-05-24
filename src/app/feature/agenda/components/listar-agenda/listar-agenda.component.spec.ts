import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListarAgendaComponent } from './listar-agenda.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {AgendaService} from '@agenda/shared/service/agenda.service';
import {HttpService} from '@core-service/http.service';
import {SharedModule} from '../../../../shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Agenda} from '../../shared/model/agenda';

describe('ListarAgendaComponent', () => {
  let component: ListarAgendaComponent;
  let fixture: ComponentFixture<ListarAgendaComponent>;
  let agendaService: AgendaService;
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAgendaComponent);
    component = fixture.componentInstance;
    agendaService = TestBed.inject(AgendaService);
    spyOn(agendaService, 'listar').and.returnValue(
      of([new Agenda(1, '2022-05-20', '2022-05-20')])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listar todos las agendas',  () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.agendas).toEqual([new Agenda(1, '2022-05-20', '2022-05-20')]);
  });

  it('should listar todos las agendas de la pagina siguiente',  () => {
    expect(component).toBeTruthy();
    component.nextPage();
    expect(component.page).toEqual(5);
  });

  it('should listar todos las agendas de la pagina anterior',  () => {
    expect(component).toBeTruthy();
    component.page = 5;
    component.prevPage();
    expect(component.page).toEqual(0);
  });
  it('should listar todos las agendas primera pagina',  () => {
    expect(component).toBeTruthy();
    component.prevPage();
    expect(component.page).toEqual(0);
  });
});
