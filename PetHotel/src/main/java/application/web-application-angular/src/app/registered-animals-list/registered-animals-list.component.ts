import { Component, OnInit } from '@angular/core';
import {RegisteredAnimal} from "../../models/registeredAnimal";
import {RegisteredAnimalsService} from "../service/registered-animals.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalSService} from "../service/animal-s.service";
import {AnimalS} from "../../models/animal-s";

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './registered-animals-list.component.html',
  styleUrls: ['./registered-animals-list.component.css']
})
export class RegisteredAnimalsListComponent implements OnInit {

  registeredAnimals: RegisteredAnimal[];
  animalId:number;
  service:string;
  animalService = new AnimalS();
  servicees=["vet","groom","train"];

  constructor(private registeredService: RegisteredAnimalsService, private router: Router, private route: ActivatedRoute, private animalServiceService: AnimalSService) { }

  ngOnInit() {
    this.registeredService.findAll().subscribe(data =>{
      this.registeredAnimals = data;
    })
  }


  saveService() {

    this.animalService.animalID = this.animalId;
    this.animalService.service_type = this.service;
    for(let i=0; i<this.registeredAnimals.length;i++){
      if(this.registeredAnimals[i].animalID === this.animalId){
        this.animalService.animal_name = this.registeredAnimals[i].animal_name;
        this.animalService.username = this.registeredAnimals[i].username;
        this.animalService.ownerID = this.registeredAnimals[i].ownerID;
      }
    }

    this.animalServiceService.save(this.animalService).subscribe(result => this.goToServicesList());
  }

  goToServicesList(){
    this.router.navigate(['/service-list']);
  }

}
