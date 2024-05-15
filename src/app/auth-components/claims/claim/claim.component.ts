import { Component } from '@angular/core';
interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
@Component({
	selector: 'app-claim',
	templateUrl: './claim.component.html',
	styleUrl: './claim.component.scss',
})

export class ClaimComponent {

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

	jobList = [
		{
			id: 'WAT-231220-00010',
			type: 'Water Mitigation',
			status: 'complete',
			pinned: false,
			active: false,
		},
		{
			id: 'FIR-231220-00011',
			type: 'Fire Damage',
			status: 'open',
			pinned: false,
			active: false,
		},
		{
			id: 'ASB-231220-00012',
			type: 'Asbestos',
			status: 'assigned',
			pinned: false,
			active: false,
		},
		{
			id: 'WAT-231220-00010',
			type: 'Water Mitigation',
			status: 'complete',
			pinned: false,
			active: false,
		},
		{
			id: 'FIR-231220-00011',
			type: 'Fire Damage',
			status: 'open',
			pinned: false,
			active: false,
		},
		{
			id: 'ASB-231220-00012',
			type: 'Asbestos',
			status: 'assigned',
			pinned: false,
			active: true,
		},
	]

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

	jobDetails = {
		integrationType: 'CV',
		serviceExpert: 'Wakeel Ahmad',
		qaReviewer: 'N/A',
		jobType: 'Fire',
		jobDescription: "Need to have restore fire damage to the basement area, lorem ipsum dolores sit amet bla blah lorem. Ipsum sit emet dolores lorem...",
		program: 'Standard Mitigation',
		mainContact: 'Edward Barney',
		mainContactEmail: 'edwardbarney@gmail.com',
		mainContactPhone: '(202) 682-3745',
		customer: 'Edward Barney',
		customerEmail: 'edwardbarney@gmail.com',
		customerPhone: '(202) 682-3745',
		customerAddress: 'Street 8th, Suit#101, Birmingham, AL, 35244, United States',
		client: 'United Group insurance',
		adjuster: 'Smith K.',
		adjusterEmail: 'unitedgroupinsurance@example.com',
		adjusterPhone: '(205) 700-0000',
		provider: 'Mr. Restore',
		initialEstimate: '23230',
		finalEstimate: '35523',
		jobInvoiceTotal: '35000',
		jobReceivedAmount: '20000',
		jobReferralFee: '200',
		jobPaidAmount: '10000',
		jobBalanceAmount: '24800',
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

	jobAttachments = [
		{
			id: '1',
			fileName: 'corevalue.pdf',
			fileType: 'pdf',
			fileUrl: '../assets/documents/corevalue.pdf'
		},
		{
			id: '2',
			fileName: 'work-details.doc',
			fileType: 'doc',
			fileUrl: '../assets/documents/work-details.doc'
		},
		{
			id: '3',
			fileName: 'house.jpg',
			fileType: 'jpg',
			fileUrl: '../assets/images/attachment-house.jpg'
		}
	]

	jobNotes = [
		{
			id: '1',
			name: 'Debbie Paulsen',
			note: 'The job has been progressing very slowly',
			date: 'Jan 30, 2024, 10:12:51 PM',
			reviewRequired: true,
			reviewRequiredBy: 'Josh Peck',
			reviewed: false,
			reviewedBy:'',
			visibleTo: ['NE', 'CS'],
		},
		{
			id: '2',
			name: 'Josh Peck',
			note: 'A "restoration job" is a significant activity commonly employed in various contexts. It involves the process of repairing or refurbishing something, be it a historical building or other artifacts, to enhance its condition or utility. Restoration work is typically undertaken to bring things back to their original state, incorporating efforts such as repairs, maintenance, or reconstruction. The aim is to return items to their former glory, preserving their historical or cultural significance.',
			date: 'Jan 30, 2024, 10:12:51 PM',
			reviewRequired: false,
			reviewRequiredBy: '',
			reviewed: false,
			reviewedBy:'',
			visibleTo: ['NE', 'CS', 'PR', 'CL'],
		},
		{
			id: '2',
			name: 'Debbie Paulsen',
			note: 'Restoration work is typically undertaken to bring things back to their original state.',
			date: 'Jan 30, 2024, 10:12:51 PM',
			reviewRequired: true,
			reviewRequiredBy: '',
			reviewed: false,
			reviewedBy:'',
			visibleTo: ['CS', 'PR', 'CL'],
		},
		{
			id: '4',
			name: 'Debbie Paulsen',
			note: 'The job has been progressing very slowly',
			date: 'Jan 30, 2024, 10:12:51 PM',
			reviewRequired: true,
			reviewRequiredBy: 'Josh Peck',
			reviewed: true,
			reviewedBy:'',
			visibleTo: ['PR', 'CL'],
		},
		{
			id: '5',
			name: 'Josh Peck',
			note: 'A "restoration job" is a significant activity commonly employed in various contexts. It involves the process of repairing or refurbishing something, be it a historical building or other artifacts, to enhance its condition or utility. Restoration work is typically undertaken to bring things back to their original state, incorporating efforts such as repairs, maintenance, or reconstruction. The aim is to return items to their former glory, preserving their historical or cultural significance.',
			date: 'Jan 30, 2024, 10:12:51 PM',
			reviewRequired: false,
			reviewRequiredBy: '',
			reviewed: false,
			reviewedBy:'',
			visibleTo: ['NE', 'CS', 'PR', 'CL'],
		},
		{
			id: '6',
			name: 'Debbie Paulsen',
			note: 'Restoration work is typically undertaken to bring things back to their original state.',
			date: 'Jan 30, 2024, 10:12:51 PM',
			reviewRequired: true,
			reviewRequiredBy: '',
			reviewed: false,
			reviewedBy:'',
			visibleTo: ['NE', 'CS', 'PR', 'CL'],
		},
	]

	first: number = 0;
    rows: number = 3;

    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }

	getShortName(fullName) { 
		return fullName.split(' ').map(n => n[0]).join('');
	}
}
