import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routers: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routers)
    ],
    exports: [RouterModule],
})
export class AppRouterModule {}