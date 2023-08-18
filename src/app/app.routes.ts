import { Routes } from '@angular/router';
import { VerticalComponent } from './shared/layout/vertical/vertical.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VerticalComponent
  }
];
