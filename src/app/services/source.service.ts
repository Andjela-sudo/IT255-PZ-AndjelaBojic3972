import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Source } from '../models/source.model';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  private sources: Observable<Source[]>;
  private readonly API_KEY = 'e1d17f401300405c9b3c737b971074bc'
  private readonly sourcesUrl = 'https://newsapi.org/v2/top-headlines/sources?apiKey='+this.API_KEY;

  constructor(private http: HttpClient) { 
    // this.sources = [
    //   new Source("abc-news","ABC News","Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.","https://abcnews.go.com","general","en","us"),
    //   new Source("abc-news-au","ABC News (AU)","Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.","http://www.abc.net.au/news","general","en","au")
    // ];
  }

  public getSources(): Observable<Source[]>{
    this.sources = this.http.get(this.sourcesUrl)
    .pipe(
      map((data: any) => data.sources.map((item: any) =>
      new Source(item.id,item.name,item.description,item.url,item.category,item.language,item.country))),
      );
    return this.sources;
  }
}
