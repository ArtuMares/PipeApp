import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulo de Primeng
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { coloresPipe } from './pipes/colores.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [

    //COmponentes
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    //Pipes
    MayusculasPipe,
    VuelaPipe,
    coloresPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
