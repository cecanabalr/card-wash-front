import { NgModule } from '@angular/core';

import {AgendaComponent} from './components/agenda/agenda.component';
import {CrearAgendaComponent} from './components/crear-agenda/crear-agenda.component';
import {AgendaRoutingModule} from './agenda-routing.module';
import {SharedModule} from '@shared/shared.module';
import {AgendaService} from './shared/service/agenda.service';
import { ListarAgendaComponent } from './components/listar-agenda/listar-agenda.component';



@NgModule({
  declarations: [
    AgendaComponent,
    CrearAgendaComponent,
    ListarAgendaComponent
  ],
  imports: [
    AgendaRoutingModule,
    SharedModule
  ],
  providers: [AgendaService],
})
export class AgendaModule { }
