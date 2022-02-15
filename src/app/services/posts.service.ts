import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Servicio

import { Posts } from 'src/app/models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerPosts()
  {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
