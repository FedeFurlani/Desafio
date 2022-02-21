import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormGroup , FormBuilder} from '@angular/forms';
import { NewserviceService } from 'src/app/services/newservice.service';
import { CreatePosts, Posts } from '../../models/posts.model'; //Model
import {MatDialog} from '@angular/material/dialog';
import { CreatedComponent } from '../created/created.component';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  form: FormGroup;
  v1: string;
  v2: string;
  obj: Posts;

  public load: Boolean = false; //Spinner

  constructor(
    private FormBuilder: FormBuilder,
    private servicioaggpost: NewserviceService,
    public dialog: MatDialog,
  ) { 
    this.buildForm(); 
  }

  private buildForm() 
  {
    this.form = this.FormBuilder.group ({
    title: ['', Validators.required],
    body: ['', Validators.required], 
  });
  }

  ngOnInit(): void {
    this.buildForm(),
    this.title.valueChanges
    .subscribe(value => 
      {
        this.v1= value;
      }),
      this.body.valueChanges
    .subscribe(value2 => 
      {
        this.v2= value2;
      })
      this.dialog;
      setTimeout(() => {
        this.load = true;
      }, 500)
  }

  get title() {
    return this.form.get('title');
  }

  get body() {
    return this.form.get('body');
  }

  save(event: any)
  {
    if(this.form.valid)
    { 
      this.agregarpost();
    } else { 
      this.form.markAllAsTouched();
    }
  }

  
  get isTitleValid()
  {
    return this.title.touched && this.title.valid;
  }

  get isTitleInvalid()
  {
    return this.title.touched && this.title.invalid;
  }

  get isBodyValid()
  {
    return this.body.touched && this.body.valid;
  }

  get isBodyInvalid()
  {
    return this.body.touched && this.body.invalid;
  }

  openmodal(obj : Posts) {
    const dialogRef = this.dialog.open(CreatedComponent, {
      height: '400px',
      width: '500px',
      data: obj });
  }

  agregarpost()
  {
      const post: CreatePosts =
      {
        userId: 1,
        title: this.v1,
        body: this.v2,
      }
      this.servicioaggpost.create(post)
      .subscribe((data: Posts) => {
      this.obj = data;
      this.openmodal(data); //Abre modal para mostrar datos del nuevo objeto
    });
  }
  
}
