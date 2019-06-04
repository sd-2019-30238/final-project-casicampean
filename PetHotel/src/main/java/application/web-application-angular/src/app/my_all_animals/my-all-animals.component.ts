import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/animal";
import {AnimalService} from "../service/animal.service";
import {AccountServiceService} from "../service/account-service.service";
import {AuthenticationService} from "../service/authentication.service";
import {RegisteredAnimalsService} from "../service/registered-animals.service";
import {RegisteredAnimal} from "../../models/registeredAnimal";
import {Account} from "../../models/account";
import {NotificationService} from "../service/notification.service";
import {Observable} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-book-list',
  templateUrl: './my-all-animals.component.html',
  styleUrls: ['./my-all-animals.component.css']
})
export class MyAllAnimalsComponent implements OnInit {

  animals: Animal[];
  registeredAnimal = new RegisteredAnimal();
  account = new Account();
  animalId:number;
  animal = new Animal();
  registeredAnimals:RegisteredAnimal[];



  constructor(private animalService: AnimalService,  private authenticationService: AuthenticationService, private registeredAnimalsService: RegisteredAnimalsService) {

  }

  getMyAnimals(){
    this.registeredAnimalsService.getMyAllAnimals(this.authenticationService.account).subscribe(animals => this.animals = animals);
  }
  getRegisteredAnimals(){
    this.registeredAnimalsService.findAll().subscribe(animals => this.registeredAnimals = animals);
  }

  ngOnInit() {
    this.getAccount();
    this.getMyAnimals();
    this.getRegisteredAnimals();
    console.log(this.account.username);
    console.log(this.getMyAnimals())
  }

  getAccount(){
    this.authenticationService.getLoggedAccount().subscribe(account => this.account = account);
  }

  sendAnimalToHotel() {
    this.registeredAnimal.animalID = this.animalId;
    this.registeredAnimal.ownerID = this.account.id;
    this.registeredAnimal.username = this.account.username;
    this.animal.id = this.animalId;

    for(let i=0; i<this.animals.length;i++){
      if(this.animals[i].id === this.animalId){
        this.registeredAnimal.animal_name = this.animals[i].name;
        this.registeredAnimal.animal_type = this.animals[i].type;
      }
    }


    for(let i=0; i<this.animals.length;i++){
      if(this.animals[i].id === this.animalId){
        this.registeredAnimal.animal_name = this.animals[i].name;
        this.registeredAnimal.animal_type = this.animals[i].type;
      }
    }
    console.log(this.registeredAnimals);
    console.log(this.animalId);

    for(let i=0; i<this.registeredAnimals.length;i++){
      if(this.registeredAnimals[i].animalID === this.animalId){
        this.registeredAnimalsService.registerAnimal(this.registeredAnimal).subscribe();
      }
    }

    this.animalService.sendAnimal(this.animal);

  }

}
