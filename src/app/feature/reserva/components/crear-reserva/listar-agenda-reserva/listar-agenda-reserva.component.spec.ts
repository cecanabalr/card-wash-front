import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendaReservaComponent } from './listar-agenda-reserva.component';

describe('ListarAgendaReservaComponent', () => {
  let component: ListarAgendaReservaComponent;
  let fixture: ComponentFixture<ListarAgendaReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAgendaReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAgendaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
