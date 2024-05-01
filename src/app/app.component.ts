import { Component } from '@angular/core';
interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
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

	first: number = 0;

    rows: number = 10;

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
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

	getShortName(fullName) { 
		return fullName.split(' ').map(n => n[0]).join('');
	}

	jobParticipents = [
		{
			id: '1',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: true,
			tracking: false,
			avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png',
		},
		{
			id: '2',
			name: 'Doe John',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			tracking: true,
			avatar: '',
		},
		{
			id: '3',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			tracking: false,
			avatar: '',
		},
		{
			id: '4',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			tracking: false,
			avatar: '',
		},
		{
			id: '5',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			tracking: false,
			avatar: '',
		},
		{
			id: '6',
			name: 'John Doe',
			designation: 'Queue Manager - Network',
			email: 'john@example.com',
			phone: '+22 (844) 287-3199',
			default: false,
			tracking: false,
			avatar: '',
		}
	]
}
