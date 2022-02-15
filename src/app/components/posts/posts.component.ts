import {  Component, OnInit, ViewChild } from '@angular/core';
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
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource : Posts[] = [];
  postsarre: Posts[] = [];
  dataSource2 = new MatTableDataSource(this.postsarre);

  constructor(
    private PostsService: PostsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.PostsService.obtenerPosts()
    .subscribe(data => {
      this.postsarre= data;
      this.dataSource = data;
      this.dataSource2.paginator = this.paginator;
    })
  }

  openmodal(id : number) {
    const dialogRef = this.dialog.open(CommentsComponent, {
      height: '500px',
      width: '900px',
      data: { id },
    })
  }
  
  opennewpost() 
  {
      const dialogRef = this.dialog.open(NewpostComponent, {
        height: '480px',
        width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
}
