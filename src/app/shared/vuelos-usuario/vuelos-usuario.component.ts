import { Component } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos-usuario',
  templateUrl: './vuelos-usuario.component.html',
  styleUrls: ['./vuelos-usuario.component.css']
})
export class VuelosUsuarioComponent {
  constructor(private vuelosServices : VuelosService){}

  get vuelosDeapertures(){
    return this.vuelosServices.vuelosDeaperturesM
  }

  get vuelos(){
    return this.vuelosServices.vuelosArrivedd
  }
}
