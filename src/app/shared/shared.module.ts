import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MensajeErrorCamposDirective } from './directivas/error-campos/directiva/mensaje-error-campos.directive';
import { MensajeErrorCamposSubmitDirective } from './directivas/error-campos/directiva/mensaje-error-campos-submit.directive';
import { MensajeErrorCamposContenedorDirective } from './directivas/error-campos/directiva/mensaje-error-campos-contenedor.directive';
import { ErrorCamposPlantillaComponent } from './directivas/error-campos/componente/error-campos-plantilla.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { FiltroAgendaPipe } from './pipe/filtro-agenda.pipe';
import { FiltroReservaPipe } from './pipe/filtro-reserva.pipe';
import {FiltroServiciosPipe} from '@shared/pipe/filtro-servicios.pipe';

@NgModule({
  declarations: [
    ErrorCamposPlantillaComponent,
    MensajeErrorCamposDirective,
    MensajeErrorCamposContenedorDirective,
    MensajeErrorCamposSubmitDirective,
    TrackByPipe,
    FiltroAgendaPipe,
    FiltroReservaPipe,
    FiltroServiciosPipe
  ],
  imports: [ReactiveFormsModule, FormsModule],
    exports: [
        CommonModule,
        HttpClientModule,
        MensajeErrorCamposDirective,
        MensajeErrorCamposContenedorDirective,
        MensajeErrorCamposSubmitDirective,
        ReactiveFormsModule,
        FormsModule,
        TrackByPipe,
        FiltroAgendaPipe,
        FiltroReservaPipe,
        FiltroServiciosPipe
    ]
})
export class SharedModule { }
