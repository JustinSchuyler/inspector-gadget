import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ArticleSearchPageComponent } from './article-search-page/article-search-page.component';
import { ArticleSearchBarComponent } from './article-search-page/article-search-bar/article-search-bar.component';
import { ArticleFilterBarComponent } from './article-search-page/article-filter-bar/article-filter-bar.component';
import { ArticleSymptomListComponent } from './article-search-page/article-symptom-list/article-symptom-list.component';
import { ArticleListComponent } from './article-search-page/article-list/article-list.component';
import { ArticleSummaryComponent } from './article-search-page/article-list/article-summary/article-summary.component';
import { ArticleAdderBarComponent } from './article-search-page/article-adder-bar/article-adder-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ArticleDetailsPageComponent } from './article-details-page/article-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleSearchPageComponent,
    ArticleSearchBarComponent,
    ArticleFilterBarComponent,
    ArticleSymptomListComponent,
    ArticleListComponent,
    ArticleSummaryComponent,
    ArticleAdderBarComponent,
    ArticleDetailsPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
