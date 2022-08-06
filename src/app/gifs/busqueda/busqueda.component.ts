import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('inputBuscar') input!:ElementRef<HTMLInputElement>;
  buscar(){
    let valor = this.input.nativeElement.value;
    if(valor){
      this.input.nativeElement.value = "";
      this.gifsService.buscar(valor);
    }
  }
  
  constructor(private gifsService:GifsServiceService){}
}
