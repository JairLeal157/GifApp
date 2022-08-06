import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsMainComponent } from './gifs-main/gifs-main.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsMainComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GifsMainComponent
  ]
})
export class GifsModule { }
