import { NgModule } from '@angular/core';

import { ServicioComponent } from './components/servicio/servicio.component';
import {ServicioRoutingModule} from './servicio-routing.module';
import {CrearServicioComponent} from './components/crear-servicio/crear-servicio.component';
import {SharedModule} from '@shared/shared.module';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import { ListarServiciosComponent } from './components/listar-servicios/listar-servicios.component';



@NgModule({
  declarations: [
    ServicioComponent,
    CrearServicioComponent,
    ListarServiciosComponent
  ],
  imports: [
    ServicioRoutingModule,
    SharedModule
  ],
  providers: [ServicioService]
})
export class ServicioModule { }
