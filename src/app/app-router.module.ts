import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routers: Route[] = [
    // { path: '', redirectTo: 'main', pathMatch: 'full', },
    { path: '', loadChildren: './pages/main/main.module#MainModule' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],
    exports: [RouterModule],
})
export class AppRouterModule {}