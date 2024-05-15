import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentsLayoutComponent } from './auth-components/auth-components-layout/auth-components-layout.component';
import { NonAuthComponentsLayoutComponent } from './non-auth-components/non-auth-components-layout/non-auth-components-layout.component';


const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{
		path: '',
		component: AuthComponentsLayoutComponent,
		loadChildren: () =>
			import('./auth-components/auth-components.module').then((m) => m.AuthComponentModuleModule),
	},
	{
		path: '',
		component: NonAuthComponentsLayoutComponent,
		loadChildren: () =>
			import('./non-auth-components/non-auth-component.module').then((m) => m.NonAuthComponentModule),
	},
	{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
