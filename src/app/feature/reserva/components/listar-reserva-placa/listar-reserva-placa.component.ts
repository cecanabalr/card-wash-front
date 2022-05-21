import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReservaService} from "@reserva/shared/service/reserva.service";
import {Reserva} from "@reserva/shared/model/reserva";
@Component({
  selector: 'app-listar-reserva-placa',
  templateUrl: './listar-reserva-placa.component.html',
  styleUrls: ['./listar-reserva-placa.component.css']
})
export class ListarReservaPlacaComponent implements OnInit {
  reservas: Reserva[] =  [];
  placa = '';
  page = 0;
  constructor(protected reservaService: ReservaService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.placa = params.get('placa');
    });
    this.buscarPorPlaca();
  }
  buscarPorPlaca(){
    this.reservaService.buscarPorFecha(this.placa).subscribe( data =>
      this.reservas = data
    );
  }

  nextPage(){
    this.page += 5;
  }
  prevPage(){
    if (this.page > 0) {
      this.page -= 5;
    }
  }
}
