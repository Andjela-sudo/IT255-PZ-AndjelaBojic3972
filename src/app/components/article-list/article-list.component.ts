import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {

  private dataSub: Subscription;
  public sourceId: string = "";
  @Input()
  public articles: Article[];
  @Input()
  public saveOption: boolean;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      this.sourceId = params.get('id') + "";
    })
    
    if (!(this.sourceId == "" || this.sourceId == "null")) {
      
      this.articleService.getArticlesBySource(this.sourceId)
      .subscribe((articles)=>{
        console.log(articles);
        
        this.articles = articles;
        console.log(this.articles);
      });
    }

  }


  ngOnInit(): void {
    this.dataSub = this.route
      .data
      .subscribe(v => {
        if (v.saveOption) {
          this.saveOption = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }



}
