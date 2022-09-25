import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ListaArrendadoresComponent } from './lista-arrendadores/lista-arrendadores.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';

const routes: Routes = [ 
  {path:'',component:AdministradorComponent,children:[
    {path:'lista-estudiantes',component:ListaEstudiantesComponent},
    {path:'lista-arrendadores',component:ListaArrendadoresComponent},
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
