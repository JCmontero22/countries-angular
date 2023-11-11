import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store';
import { Region } from '../interfaces/Region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital: {term: '', countries: []},
        byCountries: {term: '', countries: []},
        byRegion: {region: '' , countries: []}
    }

    constructor(private httpClient: HttpClient) {
        this.loagFromLocalStorage();
    }

    private saveTolocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private loagFromLocalStorage(){
        if (!localStorage.getItem('cacheStore')) {
            return
        }else{
            this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
        }
    }

    private getCountriesRequest(url: string): Observable<Country[]>{
        return this.httpClient.get<Country[]>(url).pipe(
              catchError( () => of ([]) ),
              delay(2000)
          );
    }

    searchCapital( term: string): Observable<Country[]>{

        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountriesRequest(url).pipe(
            tap( countries => this.cacheStore.byCapital = {term, countries}),
            tap( () => this.saveTolocalStorage())
        );
        /* return this.httpClient.get<Country[]>(url).pipe(
            catchError( () => of([]))
        ); */
    }

    searchCountry(term: string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountriesRequest(url).pipe(
            tap(countries => this.cacheStore.byCountries = { term, countries }),
            tap( () => this.saveTolocalStorage())
        );
        /* return this.httpClient.get<Country[]>(url).pipe(catchError( () => of([]))); */
    }

    searchRegion(term: Region): Observable<Country[]>{
        const url = `${this.apiUrl}/region/${term}`;
        return this.getCountriesRequest(url).pipe(
            tap( countries => this.cacheStore.byRegion = {region: term , countries}),
            tap( () => this.saveTolocalStorage())

        );
        /* return this.httpClient.get<Country[]>(url).pipe(catchError( () => of([]) )); */
    }

    searchCountryCode(code : string): Observable<Country | null>{
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.httpClient.get<Country[]>(url).pipe(
          map(countries => countries.length > 0 ? countries[0] : null),
          catchError( () => of(null))
        );
    }




}
