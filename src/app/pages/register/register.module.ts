import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRouterModule } from './register-router.module';

// page components
import { RegisterComponent } from './register.component';
import { RegisterCharityComponent } from './pages/register-charity/register-charity.component';
import { RegisterCommonComponent } from './pages/register-common/register-common.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRouterModule
  ],
  declarations: [
    RegisterComponent,
    RegisterCharityComponent,
    RegisterCommonComponent,
  ]
})
export class RegisterModule { }
