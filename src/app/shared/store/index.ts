import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { LayoutState, reducer } from './layout/layout.reducer';


export interface AppState {
  layout: LayoutState
}

export const reducers: ActionReducerMap<AppState> = {
  layout: reducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
