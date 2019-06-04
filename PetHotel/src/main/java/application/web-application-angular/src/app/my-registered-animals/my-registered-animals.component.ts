import { Component, OnInit } from '@angular/core';
import {RegisteredAnimal} from "../../models/registeredAnimal";
import {RegisteredAnimalsService} from "../service/registered-animals.service";
import {Account} from "../../models/account";
import {AuthenticationService} from "../service/authentication.service";
import {LoginComponent} from "../login/login.component";
import {Animal} from "../../models/animal";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-my-books',
  templateUrl: './my-registered-animals.component.html',
  styleUrls: ['./my-registered-animals.component.css']
})
export class MyRegisteredAnimalsComponent implements OnInit {

  myRegisteredAnimals: RegisteredAnimal[];
  animalId:number;
  account = new Account();
  takeRegisteredAnimal = new RegisteredAnimal();
  public notification = '';

  constructor(private notificationService: NotificationService, private registeredAnimalsService: RegisteredAnimalsService, private  authenticationService: AuthenticationService) {
    let stompClient = this.notificationService.connect();
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification/', notifications => {

        // Update notifications attribute with the recent messsage sent from the server
        this.notification = notifications.body;
      })
    });
  }

  getMyAnimals(){
    this.registeredAnimalsService.getMyAnimals(this.authenticationService.account).subscribe(books => this.myRegisteredAnimals = books);
  }

  getAccount(){
    this.authenticationService.getLoggedAccount().subscribe(account => this.account = account);
  }

  ngOnInit() {
    this.getAccount();
    this.getMyAnimals();
    console.log(this.account.username)
    console.log(this.getMyAnimals())
  }

  //take animal
  //sterg din RegisteredAnimal Animals
  takeAnimalHome() {
    this.takeRegisteredAnimal.animalID = this.animalId;
    for(let i=0; i<this.myRegisteredAnimals.length;i++){
      if(this.myRegisteredAnimals[i].animalID === this.animalId){
        this.takeRegisteredAnimal.id = this.myRegisteredAnimals[i].id;
      }
    }

    this.registeredAnimalsService.takeAnimal(this.takeRegisteredAnimal).subscribe();



  }
}
