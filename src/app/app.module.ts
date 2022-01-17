import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SourceComponent } from './components/source/source.component';
import { SourcesPageComponent } from './pages/sources-page/sources-page.component';
import { TopHeadlinesPageComponent } from './pages/top-headlines-page/top-headlines-page.component';
import { SavedArticlesPageComponent } from './pages/saved-articles-page/saved-articles-page.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchByTitlePipe } from './pipes/search-by-title.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CovidBarComponent } from './components/covid-bar/covid-bar.component'
@NgModule({
  declarations: [
    AppComponent,
    SourceListComponent,
    ArticleListComponent,
    HomeComponent,
    NavigationComponent,
    SourceComponent,
    SourcesPageComponent,
    TopHeadlinesPageComponent,
    SavedArticlesPageComponent,
    ArticleComponent,
    SearchByTitlePipe,
    CovidBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
