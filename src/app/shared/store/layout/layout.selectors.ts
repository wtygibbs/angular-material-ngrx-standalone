import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { LayoutState } from './layout.reducer';

export const selectLayout = (state: AppState) => state.layout;

export const selectLayoutSidenavOpen = createSelector(
  selectLayout,
  (state: LayoutState) => state.sidenavOpen
);
