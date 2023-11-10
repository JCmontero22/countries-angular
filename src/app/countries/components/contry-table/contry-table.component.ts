import { Component, Input } from '@angular/core';
import { Country, Maps } from '../../interfaces/country';

@Component({
  selector: 'app-contry-table',
  templateUrl: './contry-table.component.html',
  styleUrls: ['./contry-table.component.css']
})
export class ContryTableComponent {

    @Input()
    public countries: Country[] = [];
}
