import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Servicio
import { CreatePosts, Posts } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient
  ) { }

  create(data: CreatePosts)
  {
    return this.http.post<Posts>(this.apiUrl, data);
  }
}
