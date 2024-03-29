import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //Service
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsComponent } from './components/comments/comments.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators, FormGroup , FormBuilder} from '@angular/forms';
import { CreatedComponent } from './components/created/created.component';
import { MatButtonModule } from '@angular/material/button';
import  {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PruebascssComponent } from './components/home/pruebascss/pruebascss.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    CommentsComponent,
    NewpostComponent,
    CreatedComponent,
    PruebascssComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSliderModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, 
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
