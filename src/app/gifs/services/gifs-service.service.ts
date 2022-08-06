import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GIFRespuesta, Gif } from '../interfaces/gif-respuesta';
@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private listaBusqueda: string[] = [] ;
  private apiKey:string = '1d8AMVcDBSU6bOfMZu5TVJE2sEpLuWCP';
  private resultados:Gif[] = [];

  getResultados(){
    return [...this.resultados];
  }
  constructor(private http:HttpClient) {
    this.listaBusqueda = JSON.parse(localStorage.getItem("listaBusqueda")!) || []
   }
  getlistaBusqueda(){
    return [...this.listaBusqueda];
  }
  buscar(texto:string){
    texto = texto.toLowerCase();
    if(this.listaBusqueda.length > 10){
      this.listaBusqueda.shift();
    }
    if(this.listaBusqueda.includes(texto)){
      this.listaBusqueda.splice(this.listaBusqueda.indexOf(texto),1);
    }
      this.listaBusqueda.unshift(texto);    
      localStorage.setItem("listaBusqueda",JSON.stringify(this.listaBusqueda));
    this.http.get<GIFRespuesta>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${texto}&limit=10&offset=0&rating=G&lang=es`)
        .subscribe( (resp)=> {
          this.resultados = resp.data;
        })

  }

}
