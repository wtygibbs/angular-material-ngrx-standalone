import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../ui/header/header.component';
import { SidenavComponent } from '../ui/sidenav/sidenav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'grid-vertical',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatListModule, HeaderComponent, SidenavComponent],
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent {
  collapsed: boolean = false;
}
