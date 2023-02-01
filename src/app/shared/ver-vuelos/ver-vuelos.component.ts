import { Component } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-ver-vuelos',
  templateUrl: './ver-vuelos.component.html',
  styleUrls: ['./ver-vuelos.component.css']
})
export class VerVuelosComponent {

  constructor(private vuelosService : VuelosService){

  }

  get vuelos(){
    return this.vuelosService.vuelosArrivedd
  }


}
