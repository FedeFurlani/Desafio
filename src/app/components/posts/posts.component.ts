import {  AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'; 
import { NewpostComponent } from '../newpost/newpost.component';
import { Posts } from '../../models/posts.model'; 
import { PostsService } from '../../services/posts.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html', 
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public load: Boolean = false; //Spinner

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() recepdato: Posts;

  message:string;

  public dataSource : MatTableDataSource<Posts>;

  constructor(
    private PostsService: PostsService,
    public dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 1000);
    this.PostsService.obtenerPosts()
    .subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: Event) { //Filtro Busqueda
    const filtro = (filterValue.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  openmodal(id : number) { //Comentarios
    const dialogRef = this.dialog.open(CommentsComponent, {
      height: '600px',
      width: '900px',
      data: {id},
    })
  }

  refresh(objnw: Posts)
  {
    this.dataSource.data.push(objnw); //Agrega elemento tabla
    this.dataSource.paginator = this.paginator; //Agrega paginacion de nuevo elemento

      this.load = false;
      setTimeout(() => { //Carga spinner
        this.load = true;
      }, 1500);
  }
  
  opennewpost() //NuevoPost
  {
      const dialogRef = this.dialog.open(NewpostComponent, {
        height: '480px',
        width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => { 
      this.refresh(result);
    });
    
  }
}
