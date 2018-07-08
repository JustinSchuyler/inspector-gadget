import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { CaseSearchService } from '../../shared/services/case-search.service';

@Component({
  selector: 'ig-case-search-bar',
  templateUrl: './case-search-bar.component.html',
  styleUrls: ['./case-search-bar.component.scss']
})
export class CaseSearchBarComponent implements OnInit {
  color = 'primary';
  mode = 'search';

  constructor(private location: Location, private router: Router, private caseSearchService: CaseSearchService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('case-details') !== -1) {
          this.color = 'accent';
          this.mode = 'details';
        } else {
          this.color = 'primary';
          this.mode = 'search';
        }
      }
    });
  }

  search(barInput: HTMLInputElement) {
    this.caseSearchService.addSymptom(barInput.value);
    barInput.value = '';
  }

  goBack(): void {
    this.location.back();
  }

}
