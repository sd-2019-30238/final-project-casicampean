import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisteredAnimal} from "../../models/registeredAnimal";
import {Account} from "../../models/account";
import {Animal} from "../../models/animal";

@Injectable({
  providedIn: 'root'
})
export class RegisteredAnimalsService {

  private registeredAnimalsUrl: string;



  constructor(private http: HttpClient) {
    this.registeredAnimalsUrl = 'http://localhost:8080/registeredAnimals';
  }

  public findAll() : Observable<RegisteredAnimal[]>{
    return  this.http.get<RegisteredAnimal[]>(this.registeredAnimalsUrl);
  }

  public getMyAnimals(account: Account): Observable<RegisteredAnimal[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<RegisteredAnimal[]>('http://localhost:8080/getRegisteredAnimals', account, httpOptions);
  }

  public getMyAllAnimals(account: Account): Observable<Animal[]>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Animal[]>('http://localhost:8080/getAllAnimals', account, httpOptions);
  }


  public registerAnimal(borrowed: RegisteredAnimal): Observable<RegisteredAnimal>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    return this.http.post<RegisteredAnimal>(this.registeredAnimalsUrl, borrowed, httpOptions);
  }

  public takeAnimal(borrowed: RegisteredAnimal): Observable<RegisteredAnimal>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<RegisteredAnimal>('http://localhost:8080/takeAnimal', borrowed, httpOptions);
  }


}
