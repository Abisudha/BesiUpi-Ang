import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './landingPage/login/login.component';
import { RegisterComponent } from './landingPage/register/register.component';
import { WelcomeComponent } from './landingPage/welcome/welcome.component';
import { LogoutComponent } from './landingPage/logout/logout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { StatementComponent } from './user/statement/statement.component';
import { TransferComponent } from './transaction/transfer/transfer.component';
import { CardComponent } from './transaction/card/card.component';
import { AddAccountComponent } from './transaction/add-account/add-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './landingPage/header/header.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { MerchantComponent } from './user/merchant/merchant.component';
import { AddMerchantComponent } from './user/merchant/add-merchant/add-merchant.component';
import { ViewMerchantComponent } from './user/merchant/view-merchant/view-merchant.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    LogoutComponent,
    ProfileComponent,
    StatementComponent,
    TransferComponent,
    CardComponent,
    AddAccountComponent,
    HeaderComponent,
    FooterComponent,
    MerchantComponent,
    AddMerchantComponent,
    ViewMerchantComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
