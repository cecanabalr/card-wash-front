import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicioComponent} from './components/servicio/servicio.component';
import {CrearServicioComponent} from './components/crear-servicio/crear-servicio.component';
import {
  ListarServiciosComponent
} from '@servicio/components/listar-servicios/listar-servicios.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioComponent,
    children: [
      {
        path: 'crear',
        component: CrearServicioComponent
      },
      {
        path: 'listar',
        component: ListarServiciosComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
