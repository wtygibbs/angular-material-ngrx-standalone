import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../ui/header/header.component';
import { SidenavComponent } from '../ui/sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectLayoutSidenavOpen } from '../../store/layout/layout.selectors';
import { InsuredFormComponent } from '../../insured-form/insured-form.component';

@Component({
  selector: 'grid-vertical',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    HeaderComponent,
    SidenavComponent,
    InsuredFormComponent
  ],
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
})
export class VerticalComponent {
  private store = inject(Store);

  sidenavOpen$ = this.store.select(selectLayoutSidenavOpen);
}
