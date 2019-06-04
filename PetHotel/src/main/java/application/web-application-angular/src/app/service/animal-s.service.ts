import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../../models/animal";
import {AnimalS} from "../../models/animal-s";

@Injectable({
  providedIn: 'root'
})
export class AnimalSService {

  private animalUrl: string;

  constructor(private http: HttpClient) {
    this.animalUrl = 'http://localhost:8080/animalServices';
  }

  public findAll(): Observable<AnimalS[]>{
    return this.http.get<AnimalS[]>(this.animalUrl);
  }

  public save(animal: AnimalS){
    return this.http.post<AnimalS>(this.animalUrl, animal);
  }
}
