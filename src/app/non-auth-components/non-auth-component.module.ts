import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonAuthComponentRoutingModule } from './non-auth-component-routing.module';
import { NonAuthComponentsLayoutComponent } from './non-auth-components-layout/non-auth-components-layout.component';


@NgModule({
  declarations: [
    NonAuthComponentsLayoutComponent
  ],
  imports: [
    CommonModule,
    NonAuthComponentRoutingModule
  ]
})
export class NonAuthComponentModule { }
