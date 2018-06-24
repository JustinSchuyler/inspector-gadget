import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { CaseSearchPageComponent } from './case-search-page/case-search-page.component';
import { CaseSearchBarComponent } from './case-search-page/case-search-bar/case-search-bar.component';
import { CaseFilterBarComponent } from './case-search-page/case-filter-bar/case-filter-bar.component';
import { CaseSymptomListComponent } from './case-search-page/case-symptom-list/case-symptom-list.component';
import { CaseListComponent } from './case-search-page/case-list/case-list.component';
import { CaseSummaryComponent } from './case-search-page/case-list/case-summary/case-summary.component';
import { CaseAdderBarComponent } from './case-search-page/case-adder-bar/case-adder-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { CaseDetailsPageComponent } from './case-details-page/case-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseSearchPageComponent,
    CaseSearchBarComponent,
    CaseFilterBarComponent,
    CaseSymptomListComponent,
    CaseListComponent,
    CaseSummaryComponent,
    CaseAdderBarComponent,
    CaseDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
