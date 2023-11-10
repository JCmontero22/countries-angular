import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {
    public conuntries: Country[] = [];
    constructor(private countryServices: CountryService){}

    searchByCountry(trem: string):void{
        this.countryServices.searchCountry(trem).subscribe(countries =>{
            this.conuntries = countries;
        });
    }
}
