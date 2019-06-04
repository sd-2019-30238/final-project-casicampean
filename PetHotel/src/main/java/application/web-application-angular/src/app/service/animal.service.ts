import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Animal} from "../../models/animal";
import {RegisteredAnimal} from "../../models/registeredAnimal";


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalUrl: string;

  constructor(private http: HttpClient) {
    this.animalUrl = 'http://localhost:8080/animals';
  }



  public save(animal: Animal){
    return this.http.post<Animal>(this.animalUrl, animal);
  }
  public sendAnimal(animal: Animal): Observable<Animal>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Animal>('http://localhost:8080/sendAnimalToHotel', animal, httpOptions);
  }


}
