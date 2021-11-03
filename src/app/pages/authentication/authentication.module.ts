import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MemberSubscriptionComponent } from './components/member-subscription/member-subscription.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//NGZORRO
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MongodbService } from 'src/app/services/mongodb/mongodb.service';

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
    NzIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MongodbService]
})
export class AuthenticationModule { }
