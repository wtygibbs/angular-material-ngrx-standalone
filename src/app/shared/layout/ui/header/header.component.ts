import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { selectLayoutSidenavOpen } from 'src/app/shared/store/layout/layout.selectors';
import { LayoutActions } from 'src/app/shared/store/layout/layout.actions';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'grid-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, NgIf, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private store = inject(Store);

  sidenavOpen$ = this.store.select(selectLayoutSidenavOpen);

  openSidenav(): void {
    this.store.dispatch(LayoutActions.openSidenav());
  }

  closeSidenav(): void {
    this.store.dispatch(LayoutActions.closeSidenav());
  }
}
