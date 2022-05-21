import { NgModule } from '@angular/core';
import { ReservaComponent } from './components/reserva/reserva.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import {ReservaRoutingModule} from './reserva-routing.module';
import {SharedModule} from '@shared/shared.module';
import {ReservaService} from './shared/service/reserva.service';
import { ListarAgendaReservaComponent } from './components/crear-reserva/listar-agenda-reserva/listar-agenda-reserva.component';
import {AgendaService} from '@agenda/shared/service/agenda.service';
import { ListarServicioReservaComponent } from './components/crear-reserva/listar-servicio-reserva/listar-servicio-reserva.component';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import { ListarReservaPlacaComponent } from './components/listar-reserva-placa/listar-reserva-placa.component';

@NgModule({
  declarations: [
    ReservaComponent,
    CrearReservaComponent,
    ListarAgendaReservaComponent,
    ListarServicioReservaComponent,
    ListarReservaPlacaComponent
  ],
  imports: [
    ReservaRoutingModule,
    SharedModule,
  ],
  providers: [ReservaService, AgendaService, ServicioService]
})
export class ReservaModule { }
