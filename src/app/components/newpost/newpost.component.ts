import { Component, OnInit } from '@angular/core';
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
        console.log(value);
        this.v1= value;
      }),
      this.body.valueChanges
    .subscribe(value2 => 
      {
        console.log(value2);
        this.v2= value2;
      })
  }

  get title() {
    return this.form.get('title');
  }

  get body() {
    return this.form.get('body');
  }

  getTitleValue()
  {
    console.log(this.title.value);
  }

  getBodyValue()
  {
    console.log(this.body.value);
  }

  save(event: any)
  {
    if(this.form.valid){ 
      console.log(this.form.value);
      this.agregarpost()
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

  closedialog()
  {
    this.dialog.closeAll();
  }

  agregarpost()
  {
      const post: CreatePosts =
      {
        title: this.v1,
        body: this.v2,
        userId: 1
      }
      this.servicioaggpost.create(post)
      .subscribe(data => {
      console.log('newpost', data);
      this.openmodal(data);
    });
  }
}
