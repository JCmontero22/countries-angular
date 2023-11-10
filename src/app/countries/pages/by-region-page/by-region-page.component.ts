import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
    public countris: Country[] = [];

    constructor(private countryServices : CountryService){}

    public searchByRegion(trem: string):void{
        this.countryServices.searchRegion(trem).subscribe(countris => {
            this.countris = countris;
        })
    }
}
