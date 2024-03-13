import { CommonModule } from '@angular/common';
import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class WeatherCardComponent {

    @Input() weatherDatasInput!: WeatherDatas;
    minTemperatureIcon = faTemperatureLow;
    maxTemperatureIcon = faTemperatureHigh;
    humidityIcon = faDroplet;
    windIcon = faWind;
}
