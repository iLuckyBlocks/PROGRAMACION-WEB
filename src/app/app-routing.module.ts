import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrendamientoListarComponent } from './page/arrendamiento/arrendamiento-listar/arrendamiento-listar.component';
import { LoginArrendamientoComponent } from './page/arrendamiento/login-arrendamiento/login-arrendamiento.component';
import { CrearAlojamientoComponent } from './page/pagina/alojamientos/crear-alojamiento/crear-alojamiento.component';


const routes: Routes = [
  {path: '',component:ArrendamientoListarComponent},
  {path: 'login', component:LoginArrendamientoComponent},
  {path: 'pagina',loadChildren:() =>import('./page/arrendamiento/pagina/pagina.module').then(x => x.PaginaModule)},
  {path: 'portal-estudiante', loadChildren:() =>import('./page/arrendamiento/portal-estudiante/portal-estudiante.module').then(x => x.PortalEstudianteModule)},
  {path: 'administrador', loadChildren:() =>import('./page/arrendamiento/administrador/administrador.module').then(x => x.AdministradorModule)},
  {path: 'registrarse', loadChildren:() =>import('./page/arrendamiento/registrarse/registrarse.module').then(x => x.RegistrarseModule)},
  {path: 'crear-alojamiento', component:CrearAlojamientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
