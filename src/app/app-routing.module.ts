import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './pages/home/home.component';
import { SavedArticlesPageComponent } from './pages/saved-articles-page/saved-articles-page.component';
import { SourcesPageComponent } from './pages/sources-page/sources-page.component';
import { TopHeadlinesPageComponent } from './pages/top-headlines-page/top-headlines-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sources",
    component: SourcesPageComponent
  },
  {
    path: "top_headlines",
    component: TopHeadlinesPageComponent
  },
  {
    path: "sources/:id",
    component: ArticleListComponent,
    data:{ saveOption:true }
  },
  {
    path: "saved_articles",
    component: SavedArticlesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
