import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { ArticleSearchPageComponent } from './article-search-page/article-search-page.component';
import { ArticleDetailsPageComponent } from './article-details-page/article-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'article-search', pathMatch: 'full' },
  { path: 'article-search', component: ArticleSearchPageComponent, data: { state: 'article-search' }},
  { path: 'article-details/:id', component: ArticleDetailsPageComponent, data: { state: 'article-details' }}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
