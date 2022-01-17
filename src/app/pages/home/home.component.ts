import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articles: Article[];
  public saveOption: boolean;
  public searchText = ''
  public languages: string[] = ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'];
  public filtersForm: FormGroup;

  constructor(private articleService: ArticleService,
              private formBuilder: FormBuilder) {
    this.articleService.getAllArticles().subscribe((articles) => {
      console.log(articles);
      this.articles = articles;
      console.log(this.articles);
    });
    this.saveOption = true;
    this.filtersForm = this.formBuilder.group({
      language: new FormControl(this.languages[2]),
    });
  }

  get language() {
    return this.filtersForm.get('language')!.value;
  }

  onChangedLanguage(){
    console.log(this.language);
    
    this.articleService.getAllArticlesByLanguage(this.language)
    .subscribe((articles)=>{
      console.log(articles);
      this.articles = articles;
      console.log(this.articles);
    });
  }
  
  ngOnInit(): void {

  }

}
