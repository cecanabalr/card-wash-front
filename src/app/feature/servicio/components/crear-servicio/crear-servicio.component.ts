import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ServicioService} from '@servicio/shared/service/servicio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {
  servicioForm: FormGroup;
  constructor(protected servicioService: ServicioService, protected route: Router) { }

  ngOnInit(): void {
    this.construirFormularioServicio();
  }

  enviar(){
    this.servicioService.guardar(this.servicioForm.value).subscribe(() => {
      this.route.navigate(['/servicio/listar']).then();
    });
  }
  private construirFormularioServicio() {
    this.servicioForm = new FormGroup({
      id: new FormControl(0),
      nombre: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required])
    });
  }

}
