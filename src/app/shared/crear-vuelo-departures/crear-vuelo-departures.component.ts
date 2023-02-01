import { Component } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-crear-vuelo-departures',
  templateUrl: './crear-vuelo-departures.component.html',
  styleUrls: ['./crear-vuelo-departures.component.css']
})
export class CrearVueloDeparturesComponent {

  codigo : any
  to : any
  gate : any
  comentario : any

  constructor(private vueloService : VuelosService){}

  crearVuelo(){
    this.vueloService.insertarVueloDepartures(this.codigo, this.to, this.comentario, this.gate)
    console.log('insertado');

  }
}
