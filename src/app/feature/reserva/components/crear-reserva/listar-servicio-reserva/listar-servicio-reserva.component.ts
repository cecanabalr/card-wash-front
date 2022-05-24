import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import {Servicio} from '@servicio/shared/model/servicio';

@Component({
  selector: 'app-listar-servicio-reserva',
  templateUrl: './listar-servicio-reserva.component.html',
  styleUrls: ['./listar-servicio-reserva.component.css']
})
export class ListarServicioReservaComponent implements OnInit {
  @Output() servicioEvento = new EventEmitter<number>();
  servicios: Servicio[] = [];
  opcionSeleccionado = 0;
  constructor(protected servicioService: ServicioService) {
  }

  ngOnInit(): void {
    this.servicioService.listarServicios().subscribe(servicios =>
      this.servicios = servicios
    );
  }

  obtenerServicio() {
    this.servicioEvento.emit(this.opcionSeleccionado);
  }
}
