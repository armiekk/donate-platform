import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login.component';

const routers: Route[] = [
    { path: '', component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class LoginRouterModule { }