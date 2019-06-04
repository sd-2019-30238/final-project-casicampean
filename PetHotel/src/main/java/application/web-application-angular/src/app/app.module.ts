import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AccountServiceService} from "./service/account-service.service";
import { MyAllAnimalsComponent } from './my_all_animals/my-all-animals.component';
import { RegisteredAnimalsListComponent } from './registered-animals-list/registered-animals-list.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import {AnimalService} from "./service/animal.service";
import {RegisteredAnimalsService} from "./service/registered-animals.service";
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import {AuthenticationService} from "./service/authentication.service";
import { LogoutComponent } from './logout/logout.component';
import { MyRegisteredAnimalsComponent } from './my-registered-animals/my-registered-animals.component';
import {NotificationService} from "./service/notification.service";
import { AnimalServicesListComponent } from './animal-services-list/animal-services-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountFormComponent,
    MyAllAnimalsComponent,
    RegisteredAnimalsListComponent,
    AnimalFormComponent,
    LoginComponent,
    MenuComponent,
    LogoutComponent,
    MyRegisteredAnimalsComponent,
    AnimalServicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AccountServiceService, AnimalService, RegisteredAnimalsService, AuthenticationService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
