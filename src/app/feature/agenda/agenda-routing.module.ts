import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgendaComponent} from './components/agenda/agenda.component';
import {CrearAgendaComponent} from './components/crear-agenda/crear-agenda.component';
import {ListarAgendaComponent} from "@agenda/components/listar-agenda/listar-agenda.component";

const routes: Routes = [
  {
    path: '',
    component: AgendaComponent,
    children: [
      {
        path: 'crear',
        component: CrearAgendaComponent
      },
      {
        path: 'listar',
        component: ListarAgendaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
