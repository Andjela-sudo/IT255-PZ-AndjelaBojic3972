import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { SavedArticlesService } from 'src/app/services/saved-articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  public saveOption: boolean;
  @Input()
  public article:Article;

  constructor(private savedArticlesService: SavedArticlesService) { }

  public addToSavedArticles() {
    this.savedArticlesService.saveArticle(this.article);
  }

  ngOnInit(): void {
  }

}
