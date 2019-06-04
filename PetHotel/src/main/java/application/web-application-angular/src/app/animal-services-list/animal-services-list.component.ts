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

  constructor(private router: Router, private route: ActivatedRoute, private animalServiceService: AnimalSService) { }

  ngOnInit() {

    this.animalServiceService.findAll().subscribe(data => {
      this.services = data;
    })
  }

}
