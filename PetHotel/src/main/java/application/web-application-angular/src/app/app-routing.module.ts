import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountFormComponent} from "./account-form/account-form.component";
import {MyAllAnimalsComponent} from "./my_all_animals/my-all-animals.component";
import {AnimalFormComponent} from "./animal-form/animal-form.component";
import {RegisteredAnimalsListComponent} from "./registered-animals-list/registered-animals-list.component";
import {LoginComponent} from "./login/login.component";
import {MenuComponent} from "./menu/menu.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {MyRegisteredAnimalsComponent} from "./my-registered-animals/my-registered-animals.component";
import {AnimalServicesListComponent} from "./animal-services-list/animal-services-list.component";

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'myAnimals', component: MyRegisteredAnimalsComponent, canActivate:[AuthGuardService]},
  {path: 'menu', component: MenuComponent, canActivate:[AuthGuardService]},
  {path: 'accounts', component: AccountListComponent, canActivate:[AuthGuardService]},
  {path: 'addAccount', component: AccountFormComponent},
  {path: 'getAllAnimals', component: MyAllAnimalsComponent, canActivate:[AuthGuardService]},
  {path: 'animals', component: AnimalFormComponent, canActivate:[AuthGuardService]},
  {path: 'service-list', component: AnimalServicesListComponent, canActivate:[AuthGuardService]},
  {path: 'registeredAnimal', component: RegisteredAnimalsListComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
