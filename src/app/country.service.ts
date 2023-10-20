import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country.model'; // Create this model if it doesn't exist

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'http://localhost:8080/countries/all';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
