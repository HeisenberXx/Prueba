import { Component } from '@angular/core';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent {
  constructor(private vuelosServices : VuelosService){}

  get vuelosDeapertures(){
    return this.vuelosServices.vuelosDeaperturesM
  }
}
