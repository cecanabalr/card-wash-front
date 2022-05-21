import {Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';
import {AgendaService} from '@agenda/shared/service/agenda.service';
import {Agenda} from '@agenda/shared/model/agenda';

@Component({
  selector: 'app-listar-agenda-reserva',
  templateUrl: './listar-agenda-reserva.component.html',
  styleUrls: ['./listar-agenda-reserva.component.css']
})
export class ListarAgendaReservaComponent implements OnInit {
  @Input() childMessage: string;
  @Output() agendaEvento = new EventEmitter<number>();
  obtenerAgenda = 0;
  agendas: Agenda[] = [];
  page = 0;

  constructor(protected agendaService: AgendaService) { }

  ngOnInit(): void {}
  mostrarAgenda(fecha: string){
    this.agendaService.buscarPorFecha(fecha).subscribe(
      agendas => this.agendas = agendas
    );
  }
  nextPage(){
    this.page += 5;
  }
  prevPage(){
    if (this.page > 0) {
      this.page -= 5;
    }
  }
  capturar() {
    this.agendaEvento.emit(this.obtenerAgenda);
  }
}
