import { CommonModule } from '@angular/common';
import { WeatherDatas } from './../../../../models/interfaces/WeatherDatas';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class WeatherCardComponent implements OnInit{

    @Input() weatherDatasInput!: WeatherDatas;

    ngOnInit(): void {
      console.log('DADOS RECEBIDOS DO COMPONENTE PAI!:',
      this.weatherDatasInput);
    }
}
