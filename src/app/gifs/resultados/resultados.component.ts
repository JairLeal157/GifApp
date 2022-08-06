import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  
  get Gifs(){
    return this.GifsServiceService.getResultados();
  }

  constructor(private GifsServiceService:GifsServiceService) { }


}
