import { Routes } from '@angular/router';
import { VerticalComponent } from './shared/layout/vertical/vertical.component';
import { InsuredFormService } from './shared/insured-form/insured-form.service';
import { NewAppComponent } from './new-app/new-app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteResolver } from './resolvers/quote.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VerticalComponent,
  },
  {
    path: 'new-app',
    component: VerticalComponent,
    children: [
      {
        path: '',
        component: NewAppComponent,
      },
    ],
  },
  {
    path: 'quote',
    component: VerticalComponent,
    resolve: {
      resolvedData: QuoteResolver,
    },
    children: [
      {
        path: '',
        component: QuoteComponent,
      },
    ],
  },
];
