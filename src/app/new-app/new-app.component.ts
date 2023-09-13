import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from '../quote/quote.service';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { selectCoverageTypeAction } from '../shared/store/quote/quote.actions';

@Component({
  selector: 'grid-new-app',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.scss']
})
export class NewAppComponent {
  constructor(private quoteService: QuoteService, private store: Store, private router: Router){

  }

  get coveragesList() : any {
    return this.quoteService.getCoveragesList();
  }

  updateCoverageType(coverageType: string) {
    // Dispatch the action to update the Redux store with the selected coverageType
    this.store.dispatch(selectCoverageTypeAction({ coverageType }));
  }

  onNewAppCoverageClick(coverageType: string) {
    // Dispatch the action to update the Redux store with the selected coverageType
    this.store.dispatch(selectCoverageTypeAction({ coverageType }));

      // Navigate to the /quote route
    this.router.navigate(['/quote']);
  }
}
