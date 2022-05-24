import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ListarServiciosComponent } from './listar-servicios.component';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import {HttpService} from '@core-service/http.service';
import {SharedModule} from '@shared/shared.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Servicio} from '../../shared/model/servicio';

describe('ListarServiciosComponent', () => {
  let component: ListarServiciosComponent;
  let fixture: ComponentFixture<ListarServiciosComponent>;
  let servicioService: ServicioService;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      declarations: [ ListarServiciosComponent ],
      imports: [
        CommonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        SharedModule
      ],
      providers: [ServicioService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServiciosComponent);
    component = fixture.componentInstance;
    servicioService = TestBed.inject(ServicioService);

    spyOn(servicioService, 'listarServicios').and.returnValue(
      of([new Servicio(1, 'lavada', 20000)])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listar todos los servicios',  () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.servicios).toEqual([new Servicio(1, 'lavada', 20000)]);
  });
  it('should listar todos los servicios de la pagina siguiente',  () => {
    expect(component).toBeTruthy();
    component.nextPage();
    expect(component.page).toEqual(5);
  });

  it('should listar todos los servicios de la pagina anterior',  () => {
    expect(component).toBeTruthy();
    component.page = 5;
    component.prevPage();
    expect(component.page).toEqual(0);
  });
});
