import { Component,OnInit } from '@angular/core';
import {ArticleService} from './services/article.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  articles: any;
  books: any;
  constructor(private articleService: ArticleService){}

  ngOnInit(){
    //From Rails Api
    this.articleService.getArticles().subscribe(response=>{
      this.articles = response['data']
    });
    // From Go Api
    this.articleService.getBooks().subscribe(response=>{
      this.books = response
    });
  }
}
