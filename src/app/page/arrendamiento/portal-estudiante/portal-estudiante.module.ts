import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalEstudianteRoutingModule } from './portal-estudiante-routing.module';
import { PortalEstudianteComponent } from './portal-estudiante.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { HttpClientModule } from '@angular/common/http';
import { AllmoduleModule } from '../../allmodule/allmodule.module';



@NgModule({
  declarations: [
    PortalEstudianteComponent,
      InicioComponent,
       NavbarComponent,
       NovedadesComponent
  ],
  imports: [
    CommonModule,
    PortalEstudianteRoutingModule,
    HttpClientModule,
    AllmoduleModule
  ]
})
export class PortalEstudianteModule { }
