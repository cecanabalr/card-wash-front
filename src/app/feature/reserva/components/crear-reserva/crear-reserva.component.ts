import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Reserva} from "@reserva/shared/model/reserva";
import {Agenda} from "@agenda/shared/model/agenda";
import {Servicio} from "@servicio/shared/model/servicio";
import {ReservaService} from "@reserva/shared/service/reserva.service";
import {
  ListarAgendaReservaComponent
} from "@reserva/components/crear-reserva/listar-agenda-reserva/listar-agenda-reserva.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  @ViewChild(ListarAgendaReservaComponent) hijo: ListarAgendaReservaComponent;
  reservaForm: FormGroup;
  idAgenda = 0;
  idServicio = 0;
  constructor( protected reservaServicio: ReservaService, protected route: Router) {}

  ngOnInit() {
    this.construirFormularioReserva();
  }
  private construirFormularioReserva() {
    this.reservaForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      placa: new FormControl('', [Validators.required]),
    });
  }

  obtenerServicio(idServicio: number){
    this.idServicio = idServicio;
  }
  obtenerAgenda(idAgenda: number) {
    this.idAgenda = idAgenda;
  }

  enviar() {
    this.reservaServicio.guardar(new Reserva(
      this.reservaForm.value.nombre,
      this.reservaForm.value.placa,
      new Agenda(this.idAgenda, null, null),
      new Servicio(this.idServicio, null, null), null, null))
      .subscribe(() => {
          this.route.navigateByUrl('/reserva/listar/' + this.reservaForm.value.placa);
      });
  }

  onSearchDate(value: string) {
    this.hijo.mostrarAgenda(value);
  }
}
