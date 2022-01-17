import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { SavedArticlesService } from 'src/app/services/saved-articles.service';

@Component({
  selector: 'app-saved-articles-page',
  templateUrl: './saved-articles-page.component.html',
  styleUrls: ['./saved-articles-page.component.css']
})
export class SavedArticlesPageComponent implements OnInit {

  public saveOption:boolean;
  public articles:Article[] = [];

  constructor(private savedArticlesService: SavedArticlesService) { 
    this.articles = this.savedArticlesService.getSavedArticles(); //Saved articles
    this.saveOption = false;
  }

  clearAllSavedArticles(){
    this.savedArticlesService.clearSavedArticles();
    this.articles = this.savedArticlesService.getSavedArticles();
  }

  ngOnInit(): void {
  }

}
