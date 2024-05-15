import { MenuItem } from "./left-menu-interface";

export const leftSidebarMenu: Array<MenuItem> = [
    {
        label: 'Dashboard',
        active: false,
        link: '/dashboard',
        routerLink: '/dashboard',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'dashboard'
    },
    {
        label: 'Email Requests',
        active: false,
        icon: 'mail',
        link: '/emails',
        routerLink: '/emails',
        routerLinkActiveOptions: { exact: true },
        allowUserAccess: ['superadmin', 'index-UserRequest'],
        items: [
            {
                label: 'Dashboard',
                active: false,
                link: '/dashboard',
                routerLink: '/dashboard',
                allowUserAccess: ['superadmin', 'index-Dashboard'],
                allowedByRole: ['Admin'],
                routerLinkActiveOptions: { exact: true },
                icon: 'icon'
            }
        ]
    },
    {
        label: 'Service / Claims',
        active: false,
        link: '/service',
        routerLink: '/service',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'format_paint'
    },
    {
        label: 'Jobs',
        active: false,
        link: '/jobs',
        routerLink: '/jobs',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'work'
    },
    {
        label: 'Conversations',
        active: false,
        link: '/conversations',
        routerLink: '/conversations',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'chat_bubble'
    },
    {
        label: 'Accounts',
        active: false,
        link: '/accounts',
        routerLink: '/accounts',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'folder_shared'
    },
    {
        label: 'Contacts',
        active: false,
        link: '/contacts',
        routerLink: '/contacts',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'contacts'
    },
    {
        label: 'Billing',
        active: false,
        link: '/billing',
        routerLink: '/billing',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'receipt_long'
    },
    {
        label: 'Estimates',
        active: false,
        link: '/estimates',
        routerLink: '/estimates',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'receipt'
    },
    {
        label: 'Programs',
        active: false,
        link: '/programs',
        routerLink: '/programs',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'handyman'
    },
    {
        label: 'Service Areas',
        active: false,
        link: '/service-areas',
        routerLink: '/service-areas',
        allowUserAccess: ['superadmin', 'index-Dashboard'],
        allowedByRole: ['Admin'],
        routerLinkActiveOptions: { exact: true },
        icon: 'share_location'
    },
]