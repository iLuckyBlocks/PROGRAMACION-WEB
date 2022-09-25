import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArrendamientoComponent } from './page/arrendamiento/arrendamiento.component';
import { ArrendamientoListarComponent } from './page/arrendamiento/arrendamiento-listar/arrendamiento-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginArrendamientoComponent } from './page/arrendamiento/login-arrendamiento/login-arrendamiento.component';
import { CrearAlojamientoComponent } from './page/pagina/alojamientos/crear-alojamiento/crear-alojamiento.component';
import { AllmoduleModule } from './page/allmodule/allmodule.module';



@NgModule({
  declarations: [
    AppComponent,
    ArrendamientoComponent,
    ArrendamientoListarComponent,
    LoginArrendamientoComponent,
    CrearAlojamientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AllmoduleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
