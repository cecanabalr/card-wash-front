import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservaPlacaComponent } from './listar-reserva-placa.component';

describe('ListarReservaPlacaComponent', () => {
  let component: ListarReservaPlacaComponent;
  let fixture: ComponentFixture<ListarReservaPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReservaPlacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReservaPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
