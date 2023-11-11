import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit{

    public countries: Country[] = [];
    public initialValue: string = '';
    public isLoading: boolean = false;
    constructor(private countryService: CountryService){}


    ngOnInit(): void {
        this.countries = this.countryService.cacheStore.byCapital.countries;
        this.initialValue = this.countryService.cacheStore.byCapital.term;
    }

    searchByCapital(term: string): void{
        this.isLoading = true;
        this.countryService.searchCapital(term).subscribe(countries => {
            this.isLoading = false;
            this.countries = countries
        });
    }


}
