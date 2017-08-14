import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LandingComponent } from './landing.component';

const routers: Route[] = [
    { path: '', component: LandingComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class LandingRouterModule { }