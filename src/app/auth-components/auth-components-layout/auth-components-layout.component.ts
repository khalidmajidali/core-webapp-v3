import { Component, inject } from '@angular/core';
import { MenuService } from '../../common-services/menu.service';

@Component({
  selector: 'app-auth-components-layout',
  templateUrl: './auth-components-layout.component.html',
  styleUrl: './auth-components-layout.component.scss'
})
export class AuthComponentsLayoutComponent {
  menuService = inject(MenuService);
}
