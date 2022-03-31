import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public url: string;
  public id!: string;
  public article!: Article;
  
  constructor(    
    private _service: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router) { 

      this.url = Global.url;

      this._route.params.subscribe(params => {
        this.id = params['id'];
      })
    }

  ngOnInit(): void {
    this._service.getArticle(this.id).subscribe(response =>{
      this.article = response.article;
    });
  }

}
