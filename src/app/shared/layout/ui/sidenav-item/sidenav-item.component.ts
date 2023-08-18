import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'grid-sidenav-item',
  standalone: true,
  imports: [NgIf, RouterModule, MatListModule, MatIconModule],
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) text!: string;
  @Input({ required: true }) collapsed: boolean = false;
  @Input({ required: true }) link!: string;
}
