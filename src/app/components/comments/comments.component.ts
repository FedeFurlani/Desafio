import { Component, OnInit , Inject } from '@angular/core';
import { ComentariosService } from '../../services/comentarios.service';

import {MatDialog} from '@angular/material/dialog';
import { Comments } from '../../models/posts.model'; //Model

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  displayedColumns: string[] = ['postId','body'];

  arre: Comments[] = [];

  constructor(
    private ComentariosService: ComentariosService,

    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public recepdata: Comments,
  ) {   }

  ngOnInit(): void {
    this.ComentariosService.obtenerComentarios(this.recepdata.id)
    .subscribe(data => {
      this.arre= data;
      console.log(data);
    });
  }
}

