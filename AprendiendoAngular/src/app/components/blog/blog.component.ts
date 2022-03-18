import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public title: string;
  public articles!: Article[];

  constructor(
      private _articleService: ArticleService
  ) { 
    this.title = 'Blog';
  }

  ngOnInit(): void {
    this._articleService.getArticles().subscribe(
      response => {
        this.articles = response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
