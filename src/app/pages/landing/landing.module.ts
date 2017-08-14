import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRouterModule } from './landing-router.module';
@NgModule({
  imports: [
    CommonModule,
    LandingRouterModule,
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
