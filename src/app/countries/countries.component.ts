import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../country.service';
import { Country } from '../country.model'; // Import the Country model

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe(countries => {
      this.countries = countries;
    });
  }
}
