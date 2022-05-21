import { Component, OnInit } from '@angular/core';
import {Agenda} from "@agenda/shared/model/agenda";
import {AgendaService} from "@agenda/shared/service/agenda.service";

@Component({
  selector: 'app-listar-agenda',
  templateUrl: './listar-agenda.component.html',
  styleUrls: ['./listar-agenda.component.css']
})
export class ListarAgendaComponent implements OnInit {
  agendas: Agenda[] = [];
  page = 0;
  constructor(protected agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.listar().subscribe(data => {
      this.agendas = data;
    });
  }

  nextPage(){
    this.page += 5;
  }
  prevPage(){
    if (this.page > 0) {
      this.page -= 5;
    }
  }
}
