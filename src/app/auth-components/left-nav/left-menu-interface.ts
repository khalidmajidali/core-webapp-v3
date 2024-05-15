export interface MenuItem {
    label: string;
    active: boolean;
    link: string;
    routerLink?: string;
    allowUserAccess?: string[];
    allowedByRole?: string[];
    routerLinkActiveOptions?: { exact: boolean };
    icon?: string;
    items?: Array<MenuItem>
}