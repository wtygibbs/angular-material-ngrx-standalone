// your-data.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../shared/store';
import { selectCoverageType } from '../shared/store/quote/quote.selectors';

@Injectable({
  providedIn: 'root',
})
export class QuoteResolver implements Resolve<any> {
  constructor(private store: Store<AppState>) {}

  resolve(): Observable<any> {
    // Use the selector to fetch data from the store
    return this.store.pipe(select(selectCoverageType));
  }
}
