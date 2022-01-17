import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../models/article.model';

@Pipe({
  name: 'searchByTitle'
})
export class SearchByTitlePipe implements PipeTransform {

  transform(articles: Article[], searchText: string): Article[] {
    if (!articles) return [];
    if (!searchText) return articles;
    return articles.filter(article => article.title.includes(searchText));
  }

}
