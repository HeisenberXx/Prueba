import { Component, ViewChild } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-crear-vuelo',
  templateUrl: './crear-vuelo.component.html',
  styleUrls: ['./crear-vuelo.component.css']
})
export class CrearVueloComponent {

  codigo : any
  from : any
  comentario : any
  constructor(private vueloService : VuelosService){}

  crearVuelo(){
    this.vueloService.insertarVuelo(this.codigo, this.from, this.comentario)
    console.log('insertado');

  }
}
