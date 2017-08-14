import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

import { FeedComponent } from './pages/feed/feed.component';

// page components 
import { AccountComponent } from './pages/account/account.component';

const routers: Route[] = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'feed', pathMatch: 'full' },
            {
                path: 'feed',
                component: FeedComponent
            },
            {
                path: 'account',
                component: AccountComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routers)],
    exports: [RouterModule],
})
export class MainRouterModule { }