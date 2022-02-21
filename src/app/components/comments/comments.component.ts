import { Component, OnInit , Inject , ViewChild } from '@angular/core';
import { ComentariosService } from '../../services/comentarios.service';
import { Comments } from '../../models/posts.model'; //Model
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'; 
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  displayedColumns: string[] = ['postId','body'];
  public load: Boolean = false; //Spinner

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource : MatTableDataSource<Comments>;

  constructor(
    private ComentariosService: ComentariosService,
    @Inject(MAT_DIALOG_DATA) public recepdata: Comments,
  ) {   }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 500);
    this.ComentariosService.obtenerComentarios(this.recepdata.id)
    .subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  Filtro(filterValue: Event) {
    const filtro = (filterValue.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

