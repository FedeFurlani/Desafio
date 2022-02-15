import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Posts } from '../../models/posts.model'; //Model


@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.scss']
})
export class CreatedComponent implements OnInit {

  data : Posts;
  constructor(
    @Inject(MAT_DIALOG_DATA) public recepdata: Posts,
  ) {
    this.data= recepdata;
   }

  ngOnInit(): void {
  }

}
