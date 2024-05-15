import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailsComponent } from './emails/emails.component';
import { ClaimComponent } from './claims/claim/claim.component';
import { JobsComponent } from './jobs/jobs.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    title: 'Email Requests',
    path: 'emails',
    component: EmailsComponent,
  },
  {
    title: 'Claims: Service:',
    path: 'service',
    component: ClaimComponent,
  },
  {
    title: 'Jobs',
    path: 'jobs',
    component: JobsComponent,
  },
  {
    title: 'Conversations',
    path: 'conversations',
    component: ConversationsComponent,
  },
  {
    title: 'Accounts',
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    title: 'Contacts',
    path: 'contacts',
    component: ContactsComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthComponentRouting { }
