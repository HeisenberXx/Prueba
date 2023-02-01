import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  incio : string[] = []
  login : boolean = false
  usuarioNormnal : boolean = false
  constructor(private http : HttpClient, private router : Router) {

  }

  inicioSesion(user : any, pass : any){
    this.http.get(`http://localhost:3000/usuarios?usuario=${user}&pass=${pass}`).subscribe((dato:any)=>{
      this.incio = dato
      if(this.incio.length == 1){
        this.router.navigate(['inicio'])
        this.login = true
        this.usuarioNormnal = true
      }else{
        this.usuarioNormnal = true
        this.router.navigate(['verVuelos'])

      }
    })
  }
}
