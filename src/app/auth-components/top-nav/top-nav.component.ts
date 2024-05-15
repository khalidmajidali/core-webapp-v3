import { Component, OnInit, inject } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuService } from '../../common-services/menu.service';

@Component({
	selector: 'app-top-nav',
	templateUrl: './top-nav.component.html',
	styleUrl: './top-nav.component.scss',
	providers: [MessageService]
})
export class TopNavComponent implements OnInit {
	items: MenuItem[] | undefined;

	constructor() { }
	messageService = inject(MessageService);
	menuService = inject(MenuService);
	ngOnInit() {
		this.items = [
			{
				label: 'Options',
				items: [
					{
						label: 'Update',
						icon: 'pi pi-refresh',
						command: () => {
							this.update();
						}
					},
					{
						label: 'Delete',
						icon: 'pi pi-times',
						command: () => {
							this.delete();
						}
					}
				]
			},
			{
				label: 'Navigate',
				items: [
					{
						label: 'Angular',
						icon: 'pi pi-external-link',
						url: 'http://angular.io'
					},
					{
						label: 'Router',
						icon: 'pi pi-upload',
						routerLink: '/fileupload'
					}
				]
			}
		];
	}

	update() {
		this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
	}

	delete() {
		this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
	}

	menuToggle() {
		this.menuService.menuToggle();
	}

}
