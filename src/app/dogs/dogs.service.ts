import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Dog, Image} from './entities/dogs.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  dogsApi = "https://api.thedogapi.com/v1";
  option = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public getDogs(): Observable<Dog[]> {
    const url = `${this.dogsApi}/breeds`;
    return this.http.get<Dog[]>(url, this.option);
  }

  public getDog(id: string): Observable<Image> {
    const url = `${this.dogsApi}/images/${id}`;
    return this.http.get<Image>(url, this.option);
  }

  private logError(){
    console.log(`DogsService ERROR`)
  }

}
