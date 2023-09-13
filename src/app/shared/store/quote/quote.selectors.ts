import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { QuoteState } from './quote.reducer';

export const selectQuote = (state: AppState) => state.quote;

export const selectCoverageType = createSelector(
  selectQuote,
  (state: QuoteState) => state.coverageType
);
