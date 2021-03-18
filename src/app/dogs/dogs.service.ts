import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Adopter, Dog, Image} from './entities/dogs.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  dogsApi = "https://api.thedogapi.com/v1";

  adoptersApi = "http://localhost:3000/adopters";

  option = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public getDogs(): Observable<Dog[]> {
    const url = `${this.dogsApi}/breeds`;
    return this.http.get<Dog[]>(url, this.option)
      .pipe(
        catchError((error: any): Observable<Dog[]> => {
        this.logError(error);
        return of([] as Dog[]);
      }));
  }

  public getDog(id: string): Observable<Image> {
    const url = `${this.dogsApi}/images/${id}`;
    return this.http.get<Image>(url, this.option) .pipe(
      catchError((error: any): Observable<Image> => {
        this.logError(error);
        return of({} as Image);
      }));
  }

  public searchDogs(term: string): Observable<Dog[]> {
    console.log(term);
    const url = `${this.dogsApi}/breeds/?name=aff`;
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Dog[]>(url, this.option)
      .pipe(
        catchError((error: any): Observable<Dog[]> => {
          this.logError(error);
          return of([] as Dog[]);
        }));
  }

  public getAdopters(): Observable<Adopter[]> {
      return this.http.get<Adopter[]>(this.adoptersApi, this.option).pipe(
          catchError((error: any): Observable<Adopter[]> => {
              this.logError(error);
              return of([] as Adopter[]);
          })
      );
  }

  public addAdopter(adopter: Adopter): Observable<Adopter> {
    return this.http.post<Adopter>(this.adoptersApi, adopter, this.option).pipe(
      catchError((error: any): Observable<Adopter> => {
        this.logError(error);
        return of({} as Adopter);
      })
    );
  }

  private logError(error: any){
    console.log(`ERROR: ${error}`);
  }

}
