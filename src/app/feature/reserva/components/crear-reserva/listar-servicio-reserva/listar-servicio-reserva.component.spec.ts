import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListarServicioReservaComponent } from './listar-servicio-reserva.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpService} from '@core-service/http.service';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Servicio} from '../../../../servicio/shared/model/servicio';
import {of} from 'rxjs';

describe('ListarServicioReservaComponent', () => {
  let component: ListarServicioReservaComponent;
  let fixture: ComponentFixture<ListarServicioReservaComponent>;
  let servicioService: ServicioService;
  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ ListarServicioReservaComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [ServicioService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioReservaComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);
    spyOn(servicioService, 'listarServicios').and.returnValue(
      of([new Servicio(1, 'lavada', 20000)])
    );
    fixture.detectChanges();
  });

  it('should create listar', () => {
    expect(component).toBeTruthy();
  });

  it('should listar todos los servicios',  () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.servicios).toEqual([new Servicio(1, 'lavada', 20000)]);
  });

  it('should enviar mensaje al padre',  () => {
    spyOn(component.servicioEvento, 'emit');
    expect(component).toBeTruthy();
    component.obtenerServicio();
    expect(component.servicioEvento.emit).toHaveBeenCalled();
  });
});
