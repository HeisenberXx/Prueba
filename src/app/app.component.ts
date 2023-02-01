import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  superTrue = false
  usuario : any
  pass : any

  constructor(public loginService : LoginService){}

  inicio(){
    this.loginService.inicioSesion(this.usuario, this.pass)

  }



}
