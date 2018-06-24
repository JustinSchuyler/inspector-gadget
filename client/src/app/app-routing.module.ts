import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { CaseSearchPageComponent } from './case-search-page/case-search-page.component';
import { CaseDetailsPageComponent } from './case-details-page/case-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'case-search', pathMatch: 'full' },
  { path: 'case-search', component: CaseSearchPageComponent},
  { path: 'case-details/:id', component: CaseDetailsPageComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
