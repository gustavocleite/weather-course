import { WeatherCardComponent } from './../../components/weather-card/weather-card.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from '../../../../models/interfaces/WeatherDatas';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-weather-home',
    templateUrl: './weather-home.component.html',
    standalone: true,
    imports: [FormsModule, FontAwesomeModule, FontAwesomeModule, WeatherCardComponent, CommonModule]
})
  export class WeatherHomeComponent implements OnInit, OnDestroy{
    private readonly destroy$: Subject<void> = new Subject();

    initialCityName = 'Goiânia';
    weatherDatas!: WeatherDatas;
    searchIcon = faMagnifyingGlass;

    constructor(private weatherService: WeatherService){}

    ngOnInit(): void {
      this.getWeatherDatas(this.initialCityName);
    }


    getWeatherDatas(cityName: string): void{
        this.weatherService
        .getWeatherDatas(cityName)
        .pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (response) => {
            response && (this.weatherDatas = response)
            console.log(this.weatherDatas)
          },
          error: (error) => console.log(error),
        })
    }
    onSubmit(): void {
      this.getWeatherDatas(this.initialCityName);
      this.initialCityName = '';
    }
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

}
