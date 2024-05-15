import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MenuService {
	menuState:boolean = true;

	public menuToggle() {
		this.menuState = !this.menuState;
	}
}