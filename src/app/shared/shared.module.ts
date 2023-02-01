import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VerVuelosComponent } from './ver-vuelos/ver-vuelos.component';
import { DeparturesComponent } from './departures/departures.component';
import { CrearVueloComponent } from './crear-vuelo/crear-vuelo.component';
import { FormsModule } from '@angular/forms';
import { CrearVueloDeparturesComponent } from './crear-vuelo-departures/crear-vuelo-departures.component';
import { VuelosUsuarioComponent } from './vuelos-usuario/vuelos-usuario.component';





@NgModule({
  declarations: [
    SidebarComponent,
    VerVuelosComponent,
    DeparturesComponent,
    CrearVueloComponent,
    CrearVueloDeparturesComponent,
    VuelosUsuarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports : [
    SidebarComponent
  ]
})
export class SharedModule { }
