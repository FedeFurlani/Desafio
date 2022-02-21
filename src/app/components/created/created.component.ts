import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Posts } from '../../models/posts.model'; //Model
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.scss']
})
export class CreatedComponent implements OnInit {

  data : Posts;
  public load: Boolean = false; //Spinner

  constructor(
  @Inject(MAT_DIALOG_DATA) public recepdata: Posts,
  ) {
    this.data= recepdata;
   }

  ngOnInit(): void {
      setTimeout(() => {
        this.load = true;
      }, 500)
  }
}
