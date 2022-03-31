import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Article } from "../models/article";
import { Global } from "./global";

@Injectable()
export class ArticleService {
    
    public url: string;

    constructor(
        private _http: HttpClient
    ) { 
        this.url = Global.url;
    }

    prueba() {
        return "sv article";
    }

    getArticles(last: any = null): Observable<any> {
        let articles: string = '/articles/';

        if(last != null){
            articles = '/articles/true'
        }

        console.log(this.url + articles);
        return this._http.get(this.url + articles);
    }

    getArticle(id: string): Observable<any>{
        console.log(this.url + '/article/' + id);
        return this._http.get(this.url + '/article/' + id);
    }

}