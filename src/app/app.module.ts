import { BrowserModule} from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import {ServicioModule} from '@servicio/servicio.module';
import {AgendaModule} from '@agenda/agenda.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';


import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es';
import {ReservaModule} from '@reserva/reserva.module';

registerLocaleData(localeEsCo, 'es');



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    ServicioModule,
    AgendaModule,
    ReservaModule,
    CoreModule
  ],
  providers: [CookieService, {provide: LOCALE_ID, useValue: 'es'}],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
