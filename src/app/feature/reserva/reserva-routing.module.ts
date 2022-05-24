import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReservaComponent} from './components/reserva/reserva.component';
import {CrearReservaComponent} from './components/crear-reserva/crear-reserva.component';
import {ListarReservaPlacaComponent} from '@reserva/components/listar-reserva-placa/listar-reserva-placa.component';



const routes: Routes = [
  {
    path: '',
    component: ReservaComponent,
    children: [
      {
        path: 'crear',
        component: CrearReservaComponent
      },
      {
        path: 'listar',
        component: ListarReservaPlacaComponent
      },
      {
        path: 'listar/:placa',
        component: ListarReservaPlacaComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
