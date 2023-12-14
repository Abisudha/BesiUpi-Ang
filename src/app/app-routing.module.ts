import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landingPage/login/login.component';
import { RegisterComponent } from './landingPage/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { LogoutComponent } from './landingPage/logout/logout.component';
import { AddAccountComponent } from './transaction/add-account/add-account.component';
import { CardComponent } from './transaction/card/card.component';
import { TransferComponent } from './transaction/transfer/transfer.component';
import { StatementComponent } from './user/statement/statement.component';
import { MerchantComponent } from './user/merchant/merchant.component';
import { AddMerchantComponent } from './user/merchant/add-merchant/add-merchant.component';
import { ViewMerchantComponent } from './user/merchant/view-merchant/view-merchant.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'addAccount', component:AddAccountComponent},
  {path: 'card', component:CardComponent},
  {path: 'transfer', component:TransferComponent},
  {path: 'statement', component:StatementComponent},
  {path: 'merchant', component: MerchantComponent},
  {path: 'addMerchant', component:AddMerchantComponent},
  {path: 'viewMerchant', component:ViewMerchantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
