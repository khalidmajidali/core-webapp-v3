import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'core-webapp-v3';

	responsiveOptions: any[] | undefined;

	ngOnInit() {

		this.responsiveOptions = [
			{
				breakpoint: '1400px',
				numVisible: 3,
				numScroll: 3,
			},
			{
				breakpoint: '1220px',
				numVisible: 2,
				numScroll: 2,
			},
			{
				breakpoint: '1100px',
				numVisible: 1,
				numScroll: 1,
			},
		];
	}

	jobStatuses = [
		{
			id: '1',
			status: 'Open',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '2',
			status: 'Assigned',
			icon: 'pi pi-check-circle',
			color: 'complete',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '3',
			status: 'Rejected',
			icon: 'pi pi-check-circle',
			color: 'warning',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '4',
			status: 'Open',
			icon: 'pi pi-check-circle',
			color: 'error',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '5',
			status: 'Assigned',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '6',
			status: 'Rejected',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: true,
		},
		{
			id: '7',
			status: 'Open',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '7',
			status: 'Open',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '7',
			status: 'Open',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
		{
			id: '7',
			status: 'Open',
			icon: 'pi pi-check-circle',
			color: 'inprogress',
			startDate: 'Dec 20, 2023, 5:11:33 PM',
			endDate: 'Dec 20, 2023, 5:11:33 PM',
			currentlyActive: false,
		},
	]

	jobParticipents = [
		{
			id: '1',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: true,
			avatar: 'abc.jpg',
		},
		{
			id: '2',
			name: 'Doe John',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			avatar: 'abc.jpg',
		},
		{
			id: '3',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			avatar: 'abc.jpg',
		},
		{
			id: '4',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			avatar: 'abc.jpg',
		},
		{
			id: '5',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			avatar: 'abc.jpg',
		},
		{
			id: '6',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			avatar: 'abc.jpg',
		}
	]
}
