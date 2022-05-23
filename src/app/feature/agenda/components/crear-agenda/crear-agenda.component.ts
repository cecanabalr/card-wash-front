import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AgendaService} from '@agenda/shared/service/agenda.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.component.html',
  styleUrls: ['./crear-agenda.component.css']
})
export class CrearAgendaComponent implements OnInit {
  agendaForm: FormGroup;
  constructor(protected agendaServicio: AgendaService, protected route: Router) { }

  ngOnInit(): void {
    this.construirFormularioAgenda();
  }

  enviar(){
     this.agendaServicio.guardar(this.agendaForm.value).subscribe(() => {
       this.route.navigate(['agenda/listar']).then();
     });
  }

  private construirFormularioAgenda() {
    this.agendaForm = new FormGroup({
      id: new FormControl(0),
      fechaInicio: new FormControl(null, [Validators.required]),
      fechaFin: new FormControl(null, [Validators.required])
    });
  }

}
