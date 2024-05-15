import { Component } from '@angular/core';
import { MenuItem } from './left-menu-interface';
import { leftSidebarMenu } from './left-menu-constants';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss'
})
export class LeftNavComponent {
  menuItems: Array<MenuItem> = leftSidebarMenu;
}
