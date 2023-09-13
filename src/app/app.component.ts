import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'grid-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule], // Include the CoreModule in your imports],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'angular-material-ngrx-standalone';
}
