import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { SidenavItemComponent } from '../sidenav-item/sidenav-item.component';

@Component({
  selector: 'grid-sidenav',
  standalone: true,
  imports: [MatListModule, SidenavItemComponent, NgFor],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  navItems = [
    {
      icon: 'home',
      text: 'HOME',
      collapsed: false,
      link: '/home',
    },
    {
      icon: 'add',
      text: 'QUOTE',
      collapsed: false,
      link: '/new-app'
    },
    {
      icon: 'info',
      text: 'EXCESS LIABILITY',
      collapsed: false,
      link: '/excess-liability',
    },
    {
      icon: 'search',
      text: 'SEARCH',
      collapsed: false,
      link: '/search',
    },
  ];
}
