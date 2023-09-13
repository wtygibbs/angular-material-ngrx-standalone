import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { reducers } from './shared/store';
import {
  layoutFeatureKey,
  layoutReducer,
} from './shared/store/layout/layout.reducer';

import { coverageReducer } from './shared/store/quote/quote.reducer';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { InsuredFormService } from './shared/insured-form/insured-form.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({
      layout: layoutReducer, // Your existing reducer
      quote: coverageReducer,   // Add the quote reducer
    }),
    provideState({ name: layoutFeatureKey, reducer: layoutReducer }),
    provideEffects(),
    provideRouterStore(),
    environment.providers,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    // { provide: InsuredFormService, useClass: InsuredFormService },
  ],
};
