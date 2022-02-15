import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Servicio
import { Observable } from 'rxjs';
import { Comments } from 'src/app/models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url: string = "";
  constructor(
    private http: HttpClient
  ) { }

  //OBTENER COMENTARIO SEGUN ID:
  
  obtenerComentarios(id:number): Observable<Comments[]> { 

    let direccion = this.url + "https://jsonplaceholder.typicode.com/posts/" + id +"/comments"
    return this.http.get<Comments[]>(direccion); 
  } 
      
  }

