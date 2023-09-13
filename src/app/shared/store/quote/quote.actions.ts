import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const QuoteActions = createActionGroup({
  source: 'Quote',
  events: {
    'Grid Quotes': emptyProps(),
    'Grid Quotes Success': props<{ data: unknown }>(),
    'Grid Quotes Failure': props<{ error: unknown }>(),
  }
});

export const selectCoverageTypeAction = createAction(
  '[Coverage] Select Coverage Type', // A description for debugging and logging
  props<{ coverageType: string }>() // Define any payload data and its type
);
