import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  // { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'servicio', loadChildren: () => import('@servicio/servicio.module').then(mod => mod.ServicioModule)},
  { path: 'agenda', loadChildren: () => import('@agenda/agenda.module').then(mod => mod.AgendaModule)},
  { path: 'reserva', loadChildren: () => import("@reserva/reserva.module").then(mod => mod.ReservaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
