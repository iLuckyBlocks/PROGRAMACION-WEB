import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarseRoutingModule } from './registrarse-routing.module';
import { AllmoduleModule } from '../../allmodule/allmodule.module';
import { RegistrarseComponent } from './registrarse.component';


@NgModule({
  declarations: [
    RegistrarseComponent
  ],
  imports: [
    CommonModule,
    RegistrarseRoutingModule,
    AllmoduleModule
  ]
})
export class RegistrarseModule { }
