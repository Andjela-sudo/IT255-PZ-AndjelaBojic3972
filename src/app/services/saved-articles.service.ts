import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class SavedArticlesService {

  private savedArticles: Article[] = [];
  constructor() { }

  public saveArticle(article: Article){
    if(!this.savedArticles.includes(article))
    this.savedArticles.push(article);
  }

  public getSavedArticles(): Article[]{
    return this.savedArticles;
  }

  public clearSavedArticles(): Article[]{
    this.savedArticles = [];
    return this.savedArticles;
  }
}
