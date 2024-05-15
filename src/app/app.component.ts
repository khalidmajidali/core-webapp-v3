import { Component, OnInit } from '@angular/core';
import { MenuService } from './common-services/menu.service';
import { state } from '@angular/animations';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'core-webapp-v3';
	menuState: boolean;

	ngOnInit() {
		// this.menuService.menuState.subscribe((state) => {
			this.menuState = this.menuService.menuState;
		// });
	}

	constructor(public menuService: MenuService) {	
		
	}
}
