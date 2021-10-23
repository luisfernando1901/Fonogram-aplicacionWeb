import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MemberSubscriptionComponent } from './components/member-subscription/member-subscription.component';
import { RouterModule } from '@angular/router';
//NGZORRO
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    LoginComponent,
    MemberSubscriptionComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    NzIconModule
  ]
})
export class AuthenticationModule { }
