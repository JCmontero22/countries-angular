import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit{
    public conuntries: Country[] = [];
    public initialValue: string = '';
    constructor(private countryServices: CountryService){}

    ngOnInit(): void {
        this.conuntries = this.countryServices.cacheStore.byCountries.countries;
        this.initialValue = this.countryServices.cacheStore.byCountries.term;
    }

    searchByCountry(trem: string):void{
        this.countryServices.searchCountry(trem).subscribe(countries =>{
            this.conuntries = countries;
        });
    }
}
