import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
	declarations: [AppComponent, TopNavComponent, LeftNavComponent],
	imports: [BrowserModule, BrowserAnimationsModule, ButtonModule, AppRoutingModule, AvatarModule, AvatarGroupModule, MenuModule, ToastModule ],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {

}



