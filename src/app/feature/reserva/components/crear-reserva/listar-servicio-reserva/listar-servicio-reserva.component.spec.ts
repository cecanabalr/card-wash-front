import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarServicioReservaComponent } from './listar-servicio-reserva.component';

describe('ListarServicioReservaComponent', () => {
  let component: ListarServicioReservaComponent;
  let fixture: ComponentFixture<ListarServicioReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarServicioReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
