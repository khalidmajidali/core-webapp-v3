import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, ButtonModule, AppRoutingModule, AvatarModule, AvatarGroupModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
