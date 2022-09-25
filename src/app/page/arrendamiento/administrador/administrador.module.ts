import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AllmoduleModule } from '../../allmodule/allmodule.module';
import { AdministradorComponent } from '../administrador/administrador.component';
import { ListaArrendadoresComponent } from './lista-arrendadores/lista-arrendadores.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    ListaArrendadoresComponent,
    ListaEstudiantesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    AllmoduleModule
  ]
})
export class AdministradorModule { }
