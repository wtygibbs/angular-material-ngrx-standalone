import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LayoutActions = createActionGroup({
  source: 'Layout',
  events: {
    'Open Sidenav': emptyProps(),
    'Close Sidenav': emptyProps()
  }
});
