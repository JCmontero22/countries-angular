import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/Region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit{

    public countris: Country[] = [];
    public reqions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    public isloading:boolean = false;
    public selectionRegion?: string ='';

    constructor(private countryServices : CountryService){}

    ngOnInit(): void {
        this.countris = this.countryServices.cacheStore.byRegion.countries;
        this.selectionRegion = this.countryServices.cacheStore.byRegion.region;
    }

    public searchByRegion(trem: Region):void{
        this.selectionRegion = trem;
        this.isloading = true;
        this.countryServices.searchRegion(trem).subscribe(countris => {
            this.countris = countris;
            this.isloading = false;
        })
    }
}
