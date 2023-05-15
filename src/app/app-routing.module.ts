import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PruebascssComponent } from './components/home/pruebascss/pruebascss.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'posts',
    component: PostsComponent 
  },
  {
    path: 'pruebascss',
    component: PruebascssComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
