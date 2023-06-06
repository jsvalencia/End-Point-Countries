import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string ='https://restcountries.com/v3.1'

  constructor(private httpClient: HttpClient) { }


  searchCapital(term: string):Observable<Country[]>{

    const url= `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error=> of ([]))
      );
    //operador de rxjs

  }

  searchCountry(term: string):Observable<Country[]>{
    const url= `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error=> of ([]))
      );
    //operador de rxjs

  }

  searchRegion(term: string):Observable<Country[]>{
    const url= `${this.apiUrl}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error=> of ([]))
      );
    //operador de rxjs

  }

  searchCountryByAlphaCode(code: string): Observable<Country | null>{

    const url= `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null ),
      catchError(error=> of (null))
      );
    //operador de rxjs

  }



}
