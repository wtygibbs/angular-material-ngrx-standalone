import { Routes } from '@angular/router';
import { VerticalComponent } from './shared/layout/vertical/vertical.component';
import { InsuredFormService } from './shared/insured-form/insured-form.service';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VerticalComponent,
  },
];
