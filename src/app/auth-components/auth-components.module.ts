import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponentRouting } from './auth-components-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ClaimComponent } from './claims/claim/claim.component';
import { LoginComponent } from '../non-auth-components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailsComponent } from './emails/emails.component';
import { ClaimsComponent } from './claims/claims.component';
import { JobsComponent } from './jobs/jobs.component';
import { ConversationsComponent } from './conversations/conversations.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthComponentsLayoutComponent } from './auth-components-layout/auth-components-layout.component';
import { PrimengComponentsModule } from '../shared-modules/primeng-components';
import { SharedModule } from '../shared-modules/shared-modules';

@NgModule({
  declarations: [TopNavComponent, LeftNavComponent, PageHeaderComponent, ClaimComponent, LoginComponent, DashboardComponent, EmailsComponent, ClaimsComponent, JobsComponent, ConversationsComponent, AccountsComponent, ContactsComponent, AuthComponentsLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthComponentRouting,
    PrimengComponentsModule,
    SharedModule
  ]
})
export class AuthComponentModuleModule { }
