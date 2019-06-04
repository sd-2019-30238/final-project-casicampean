import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/animal";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountServiceService} from "../service/account-service.service";
import {AnimalService} from "../service/animal.service";
import {AuthenticationService} from "../service/authentication.service";
import {Account} from "../../models/account";
import {animate} from "@angular/animations";

@Component({
  selector: 'app-book-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animal: Animal;
  account= new Account();
  types = ["cat", "dog", "rabbit", "hamster"];

  constructor(private route: ActivatedRoute,private  authenticationService: AuthenticationService, private router: Router, private animalService: AnimalService) {
    this.animal = new Animal();
  }


  onSubmit(){
    this.animal.owner_name = this.authenticationService.account.username;
    this.animal.ownerID = this.account.id;
    this.animalService.save(this.animal).subscribe(result => this.goToAnimalList());
  }

  getAccount(){
    this.authenticationService.getLoggedAccount().subscribe(account => this.account = account);
  }

  goToAnimalList(){
    this.router.navigate(['/getAllAnimals']);
  }

  ngOnInit() {
    this.getAccount();
  }

}
