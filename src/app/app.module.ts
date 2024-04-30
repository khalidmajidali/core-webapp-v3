import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

import { TopNavComponent } from './top-nav/top-nav.component';
import { LeftNavComponent } from './left-nav/left-nav.component';

@NgModule({
	declarations: [AppComponent, TopNavComponent, LeftNavComponent],
	imports: [ BrowserModule, BrowserAnimationsModule, ButtonModule, CardModule, CarouselModule, AppRoutingModule, AvatarModule, AvatarGroupModule, MenuModule, ToastModule, TooltipModule, ScrollPanelModule ],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {

}



