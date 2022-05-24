import { Component, OnInit } from '@angular/core';
import {Servicio} from '@servicio/shared/model/servicio';
import {ServicioService} from '@servicio/shared/service/servicio.service';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarServiciosComponent implements OnInit {

  servicios: Servicio[] = [];
  page = 0;
  constructor(protected servicioService: ServicioService ) { }

  ngOnInit(): void {
    this.listarServicios();
  }

  listarServicios(){
    this.servicioService.listarServicios().subscribe( data =>
      this.servicios = data
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
