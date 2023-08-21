import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { reducers } from './shared/store';
import { layoutFeatureKey, reducer } from './shared/store/layout/layout.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore(),
    provideState({ name: layoutFeatureKey, reducer: reducer }),
    provideEffects(),
    provideRouterStore(),
    environment.providers,
  ]
};
