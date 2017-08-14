import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouterModule } from './main-router.module';
import { AppShareModule } from '../../share/app-share.module';
import { MainStoreModule } from './store/main-store.module';

// main
import { MainComponent } from './main.component';

// common components
import { CharityListComponent } from './components/charity-list/charity-list.component';
import { CharityCarousel } from './components/charity-carousel/charity-carousel.component';

//page components 
import { AccountComponent } from './pages/account/account.component';
import { FeedComponent } from './pages/feed/feed.component';
import { CharityComponent } from './pages/charity/charity.component';

// services

@NgModule({
  imports: [
    CommonModule,
    MainRouterModule,
    AppShareModule,
    MainStoreModule,
  ],
  declarations: [
    MainComponent,
    // pages
    FeedComponent,
    AccountComponent,
    CharityComponent,
    // common
    CharityListComponent,
    CharityCarousel,
  ],
  providers: []
})
export class MainModule { }
