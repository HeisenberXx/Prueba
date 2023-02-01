import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  private vuelosArrivedM !: any
  private vuelosDeaper !: any

  constructor(private http : HttpClient) {
    this.vuelosArrived()
    this.vuelosDeapertures()

  }

  vuelosArrived():any{
    this.http.get('http://localhost:3000/vuelosArrived').subscribe((data : any)=>{
      this.vuelosArrivedM = data
    })
  }

  get vuelosArrivedd(){
    return this.vuelosArrivedM
  }

  vuelosDeapertures():any{
    this.http.get('http://localhost:3000/vuelosDeapertures').subscribe((data : any)=>{
      this.vuelosDeaper = data
    })
  }

  get vuelosDeaperturesM(){
    return this.vuelosDeaper
  }

  insertarVuelo(codigo  :any, from : any, comentario : any){
    let body = {
      id: codigo,
      From : from,
      Comentarios : comentario
    }
    this.http.post('http://localhost:3000/vuelosArrived', body).subscribe(dato =>{
      console.log(dato);

    })
  }

  insertarVueloDepartures(codigo  :any, from : any, comentario : any, gate : any){
    let body = {
      id: codigo,
      To : from,
      gate : gate,
      Comentarios : comentario
    }
    this.http.post('http://localhost:3000/vuelosArrived', body).subscribe(dato =>{
      console.log(dato);

    })
  }
}
