// core/core.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot(),
    // Other modules you might need (e.g., HttpClientModule, FormsModule, etc.)
  ],
  declarations: [],
  providers: [
    // Services or providers specific to your core module
  ],
})
export class CoreModule {}
