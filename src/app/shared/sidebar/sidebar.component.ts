import { Component} from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  get listaBusqueda(){
    return this.GifsServiceService.getlistaBusqueda();
  }
  
  constructor(private GifsServiceService:GifsServiceService) { }
}
