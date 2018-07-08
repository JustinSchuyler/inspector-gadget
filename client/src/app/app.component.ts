import { Component } from '@angular/core';

import { slideTransition } from './router.animations';

@Component({
  selector: 'ig-root',
  animations: [ slideTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  getState(outlet) {
    return (outlet && outlet.activatedRouteData) ? outlet.activatedRouteData.state : null;
  }
}
