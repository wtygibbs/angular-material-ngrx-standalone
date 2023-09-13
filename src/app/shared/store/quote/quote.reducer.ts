import { Action, createReducer, on } from '@ngrx/store';
import { QuoteActions } from './quote.actions';
import { selectCoverageTypeAction } from './quote.actions'; // Import your action

export const quoteFeatureKey = 'quote';

export interface QuoteState {
  coverageType: string;
}

// Define the initial state
export const initialState: QuoteState = {
  coverageType: '', // Initial value for coverageType
};

// Create the reducer
const _coverageReducer = createReducer(
  initialState,
  on(selectCoverageTypeAction, (state, { coverageType }) => {
    // Update the state with the selected coverageType
    return { ...state, coverageType };
  })
);

// Export the reducer function
export function coverageReducer(state: { coverageType: string; } | undefined, action: Action) {
  return _coverageReducer(state, action);
}

