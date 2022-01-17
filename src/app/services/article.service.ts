import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Observable<Article[]>;
  private readonly API_KEY = 'e1d17f401300405c9b3c737b971074bc'
  private readonly BASE_URL = 'https://newsapi.org/v2';
  private readonly everything = '/everything?q=a&apiKey='+this.API_KEY;
  private readonly top = '/top-headlines?country=us&apiKey='+this.API_KEY;


  constructor(private http: HttpClient) { 
    // this.articles = [
    //   new Article("art1","By <a href=\"/profiles/hilary-whiteman\">Hilary Whiteman</a>, <a href=\"/profiles/julia-hollingsworth\">Julia Hollingsworth</a>, <a href=\"/profiles/jessie-yeung\">Jessie Yeung</a>, Adam Renton and <a href=\"/profiles/laura-smith-spark\">Laura Smith-Spark</a>, CNN","Djokovic loses visa appeal, leaves country ahead of Australian Open: Live updates - CNN","Serbian tennis star Novak Djokovic has lost his appeal against the Australian government's decision to cancel his visa for a second time.", "https://cdn.cnn.com/cnnnext/dam/assets/220115135335-djokovic-visa-deportes-cnn-super-tease.jpg","2022-01-16T12:04:00Z","Goran Zabic, who was among a group of Djokovic supporters who gathered in Melbourne on Sunday, said he was \"absolutely devastated, as well as shocked\" by the outcome.\r\n\"I really was surprised that a … [+559 chars]", "https://www.cnn.com/asia/live-news/novak-djokovic-australia-visa-news-01-16-22-intl-hnk/index.html","cnn","CNN"),
    //   new Article("art2","Alanne Orjoux, CNN" ,"Dangerous ice storm, heavy snowfall and potential travel woes and power outages expected in the Southeast - CNN","Serbian tennis star Novak Djokovic has lost his appeal against the Australian government's decision to cancel his visa for a second time.", "https://cdn.cnn.com/cnnnext/dam/assets/220115135335-djokovic-visa-deportes-cnn-super-tease.jpg","2022-01-16T12:04:00Z","Goran Zabic, who was among a group of Djokovic supporters who gathered in Melbourne on Sunday, said he was \"absolutely devastated, as well as shocked\" by the outcome.\r\n\"I really was surprised that a … [+559 chars]", "https://www.cnn.com/asia/live-news/novak-djokovic-australia-visa-news-01-16-22-intl-hnk/index.html","cnn","CNN")
    // ];
  }

  public getAllArticles(): Observable<Article[]>{
    this.articles = this.http.get(this.BASE_URL + this.everything)
    .pipe(
      map((data: any) => data.articles.map((item: any) =>
      new Article(item.id,item.author,item.title,item.description,item.urlToImage,item.publishedAt,item.content,item.url,item.source.id,item.source.name))),
      );
    return this.articles;
  }
  public getTopArticles(): Observable<Article[]>{
    this.articles = this.http.get(this.BASE_URL + this.top)
    .pipe(
      map((data: any) => data.articles.map((item: any) =>
      new Article(item.id,item.author,item.title,item.description,item.urlToImage,item.publishedAt,item.content,item.url,item.source.id,item.source.name))),
      );
    return this.articles;
  }
  public getArticlesBySource(sourceId : string): Observable<Article[]>{
    this.articles = this.http.get(this.BASE_URL + '/top-headlines?sources='+sourceId+'&apiKey='+this.API_KEY)
    .pipe(
      map((data: any) => data.articles.map((item: any) =>
      new Article(item.id,item.author,item.title,item.description,item.urlToImage,item.publishedAt,item.content,item.url,item.source.id,item.source.name))),
      );
    return this.articles;
  }
  public getAllArticlesByLanguage(language : string): Observable<Article[]>{
    this.articles = this.http.get(this.BASE_URL + '/everything?q=a&language='+language+'&apiKey='+this.API_KEY)
    .pipe(
      map((data: any) => data.articles.map((item: any) =>
      new Article(item.id,item.author,item.title,item.description,item.urlToImage,item.publishedAt,item.content,item.url,item.source.id,item.source.name))),
      );
    return this.articles;
  }
  public getTopArticlesByCountry(country: string): Observable<Article[]>{
    this.articles = this.http.get(this.BASE_URL + '/top-headlines?country='+country+'&apiKey='+this.API_KEY)
    .pipe(
      map((data: any) => data.articles.map((item: any) =>
      new Article(item.id,item.author,item.title,item.description,item.urlToImage,item.publishedAt,item.content,item.url,item.source.id,item.source.name))),
      );
    return this.articles;
  }
  public getTopArticlesByCategory(category: string): Observable<Article[]>{
    this.articles = this.http.get(this.BASE_URL + '/top-headlines?category='+category+'&apiKey='+this.API_KEY)
    .pipe(
      map((data: any) => data.articles.map((item: any) =>
      new Article(item.id,item.author,item.title,item.description,item.urlToImage,item.publishedAt,item.content,item.url,item.source.id,item.source.name))),
      );
    return this.articles;
  }
}
