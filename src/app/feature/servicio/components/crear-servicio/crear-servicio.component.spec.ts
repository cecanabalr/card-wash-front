import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { CrearServicioComponent } from './crear-servicio.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from '@core-service/http.service';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';

describe('CrearServicioComponent', () => {
  let component: CrearServicioComponent;
  let fixture: ComponentFixture<CrearServicioComponent>;
  let servicioService: ServicioService;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ CrearServicioComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ServicioService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('formulario es invalido cuando esta vacio', () => {
    expect(component.servicioForm.valid).toBeFalsy();
  });
  it('Registrando servicio', () => {
    expect(component.servicioForm.valid).toBeFalsy();
    component.servicioForm.controls.id.setValue(1);
    component.servicioForm.controls.nombre.setValue('lavado test');
    component.servicioForm.controls.valor.setValue(20000);
    expect(component.servicioForm.valid).toBeTruthy();

    component.enviar();

  });
});
