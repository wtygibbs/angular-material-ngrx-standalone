import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { SidenavItemComponent } from '../sidenav-item/sidenav-item.component';

@Component({
  selector: 'grid-sidenav',
  standalone: true,
  imports: [MatListModule, SidenavItemComponent, NgFor],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navItems = [
    {
      icon: 'home',
      text: 'HOME',
      collapsed: false,
      link: '/home'
    },
    {
      icon: 'search',
      text: 'SEARCH',
      collapsed: false,
      link: '/search'
    },
    {
      icon: 'info',
      text: 'INFO',
      collapsed: false,
      link: '/info'
    }
  ];
}
