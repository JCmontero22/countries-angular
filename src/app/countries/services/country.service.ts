import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1';
    constructor(private httpClient: HttpClient) { }


    searchCapital( term: string): Observable<Country[]>{

        const url = `${this.apiUrl}/capital/${term}`;
        return this.httpClient.get<Country[]>(url).pipe(
            catchError( () => of([]))
        );
    }

    searchCountry(tren: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${tren}`;
        return this.httpClient.get<Country[]>(url).pipe(catchError( () => of([])));
    }

    searchRegion(trem: string): Observable<Country[]>{
        const url = `${this.apiUrl}/region/${trem}`;
        return this.httpClient.get<Country[]>(url).pipe(catchError( () => of([]) ));
    }

    searchCountryCode(code : string): Observable<Country | null>{
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.httpClient.get<Country[]>(url).pipe(
          map(countries => countries.length > 0 ? countries[0] : null),
          catchError( () => of(null))
        );
    }


}
