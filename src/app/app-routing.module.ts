import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';

import { PaginatorComponent } from './components/prueba/paginator/paginator.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'posts',
    component: PostsComponent 
  }, 
  { //Prueba de ejemplo paginator
    path: 'prueba',
    component: PaginatorComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
