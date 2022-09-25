import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortalEstudianteComponent } from './portal-estudiante.component';
import { InicioComponent } from './inicio/inicio.component';
import { NovedadesComponent } from './novedades/novedades.component';


const routes: Routes = [
    {path:'',component:PortalEstudianteComponent, children:[

      {path:'',component:InicioComponent},
      {path: 'novedades',component:NovedadesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalEstudianteRoutingModule { }
