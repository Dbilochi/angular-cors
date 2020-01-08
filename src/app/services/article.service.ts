import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    constructor(private http :HttpClient){}
    getArticles(){
        return this.http.get('http://rocky-stream-85231.herokuapp.com/api/v1/articles');
    }

    getBooks(){
        return this.http.get('https://mysterious-cove-18978.herokuapp.com/getbooks');
    }
}