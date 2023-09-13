import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { LayoutState, layoutReducer } from './layout/layout.reducer';
import { QuoteState , coverageReducer} from './quote/quote.reducer';


export interface AppState {
  layout: LayoutState,
  quote: QuoteState
}

export const reducers: ActionReducerMap<AppState> = {
  layout: layoutReducer,
  quote: coverageReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
