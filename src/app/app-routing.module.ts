import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CrearVueloDeparturesComponent } from './shared/crear-vuelo-departures/crear-vuelo-departures.component';
import { CrearVueloComponent } from './shared/crear-vuelo/crear-vuelo.component';
import { DeparturesComponent } from './shared/departures/departures.component';


import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VerVuelosComponent } from './shared/ver-vuelos/ver-vuelos.component';
import { VuelosUsuarioComponent } from './shared/vuelos-usuario/vuelos-usuario.component';


const routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path: 'inicio',
    component: VerVuelosComponent
  },
  {
    path: 'vuelosDe',
    component: DeparturesComponent
  },
  {
    path : 'crearVuelo',
    component : CrearVueloComponent
  },
  {
    path: 'crearVueloDeapertures',
    component: CrearVueloDeparturesComponent
  },
  {
    path :'verVuelos',
    component : VuelosUsuarioComponent
  },
  {
    path :'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
