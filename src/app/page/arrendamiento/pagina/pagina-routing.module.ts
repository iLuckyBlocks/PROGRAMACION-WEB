import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlojamientoComponent } from '../../pagina/alojamientos/crear-alojamiento/crear-alojamiento.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaComponent } from './pagina.component';

const routes: Routes = [
{path:'',component:PaginaComponent, children:[

  {path:'',component:InicioComponent},
  {path: 'alojamientos',component:AlojamientosComponent},
  {path: 'crear-alojamiento', component:CrearAlojamientoComponent},
   
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaRoutingModule { }
