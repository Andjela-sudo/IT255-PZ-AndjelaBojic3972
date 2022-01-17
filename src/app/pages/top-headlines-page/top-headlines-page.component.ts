import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-top-headlines-page',
  templateUrl: './top-headlines-page.component.html',
  styleUrls: ['./top-headlines-page.component.css']
})
export class TopHeadlinesPageComponent implements OnInit {

  public articles: Article[];
  public saveOption: boolean;
  public filtersForm: FormGroup;
  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public countries: string[] = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

  constructor(private articleService: ArticleService,
              private formBuilder: FormBuilder) {
    this.articleService.getTopArticles().subscribe((articles) => {
      console.log(articles);
      this.articles = articles;
      console.log(this.articles);
    });
    this.saveOption = true;
    this.filtersForm = this.formBuilder.group({
      country: new FormControl(''),
      category: new FormControl('')
    });
  }
  get country() {
    return this.filtersForm.get('country')!.value;
  }
  get category() {
    return this.filtersForm.get('category')!.value;
  }

  onCategoryChange(){
    console.log(this.category);
    
    this.articleService.getTopArticlesByCategory(this.category)
    .subscribe((articles)=>{
      console.log(articles);
      this.articles = articles;
      console.log(this.articles);
    });
  }
  onCountryChange(){
    console.log(this.country);
    
    this.articleService.getTopArticlesByCountry(this.country)
    .subscribe((articles)=>{
      console.log(articles);
      this.articles = articles;
      console.log(this.articles);
    });
  }

  ngOnInit(): void {
  }

}
