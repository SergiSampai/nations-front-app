import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';
import { CountryStatisticsComponent } from './country-statistics/country-statistics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:id/languages', component: SpokenLanguagesComponent },
  { path: 'country-statistics', component: CountryStatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

