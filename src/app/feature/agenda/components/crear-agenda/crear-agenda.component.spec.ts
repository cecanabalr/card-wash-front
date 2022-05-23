import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CrearAgendaComponent } from './crear-agenda.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '@core-service/http.service';
import {AgendaService} from '@agenda/shared/service/agenda.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
describe('CrearAgendaComponent', () => {
  let component: CrearAgendaComponent;
  let fixture: ComponentFixture<CrearAgendaComponent>;
  let agendaService: AgendaService;

  beforeEach(waitForAsync(  () => {
     TestBed.configureTestingModule({
      declarations: [ CrearAgendaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'agenda/listar', component: CrearAgendaComponent}
        ]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [AgendaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAgendaComponent);
    component = fixture.componentInstance;
    agendaService = TestBed.inject(AgendaService);
    spyOn(agendaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.agendaForm.valid).toBeFalsy();
  });

  it('Registrando agenda', () => {
    expect(component.agendaForm.valid).toBeFalsy();
    component.agendaForm.controls.id.setValue(0);
    component.agendaForm.controls.fechaInicio.setValue('2022-05-20');
    component.agendaForm.controls.fechaFin.setValue('2022-05-20');
    expect(component.agendaForm.valid).toBeTruthy();

    component.enviar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
