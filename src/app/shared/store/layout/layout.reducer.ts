import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  sidenavOpen: boolean;
}

export const initialState: LayoutState = {
  sidenavOpen: true
};

export const layoutReducer = createReducer(
  initialState,
  on(LayoutActions.openSidenav, (state: LayoutState) => ({ ...state, sidenavOpen: true })),
  on(LayoutActions.closeSidenav, (state: LayoutState) => ({ ...state, sidenavOpen: false }))
);

