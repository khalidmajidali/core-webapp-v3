import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../common-services/menu.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
	constructor(private menuService: MenuService) {}

	ngOnInit(): void {
			
	}

	ngOnDestroy() {
		
	}
}
