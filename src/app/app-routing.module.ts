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

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'addAccount', component:AddAccountComponent},
  {path: 'card', component:CardComponent},
  {path: 'transfer', component:TransferComponent},
  {path: 'statement', component:StatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
