import { Component, OnInit } from '@angular/core';
import {AnimalSService} from "../service/animal-s.service";
import {AnimalS} from "../../models/animal-s";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-animal-services-list',
  templateUrl: './animal-services-list.component.html',
  styleUrls: ['./animal-services-list.component.css']
})
export class AnimalServicesListComponent implements OnInit {

  services:AnimalS[];
  animalId:number;
  service:string;
  servicesList = ["train","groom","vet"];
  animalService: AnimalS;

  constructor(private router: Router, private route: ActivatedRoute, private animalServiceService: AnimalSService) { }

  ngOnInit() {

    this.animalServiceService.findAll().subscribe(data => {
      this.services = data;
    })
  }

  saveService() {

    this.animalService.animalID = this.animalId;
    this.animalService.service_type = this.service;
    for(let i=0; i<this.services.length;i++){
      if(this.services[i].animalID === this.animalId){
        this.animalService.animal_name = this.services[i].animal_name;
        this.animalService.username = this.services[i].username;
        this.animalService.ownerID = this.services[i].ownerID;
      }
    }

    this.animalServiceService.save(this.animalService).subscribe(result => this.goToServicesList());
  }

  goToServicesList(){
    this.router.navigate(['/getAllAnimals']);
  }
}
