import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// main page
import { RegisterComponent } from './register.component';

// page components
import { RegisterCharityComponent } from './pages/register-charity/register-charity.component';
import { RegisterCommonComponent } from './pages/register-common/register-common.component';

const routers: Route[] = [
    {
        path: '',
        component: RegisterComponent,
        children: [
            { path: '', component: RegisterCommonComponent },
            { path: 'charity', component: RegisterCharityComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class RegisterRouterModule { }