import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationService} from '../services/location.service';
import {IpAddressService} from '../services/ip-address.service';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public locationData: any;
  public timeOfDay = '';
  today: number = Date.now();

  constructor(private locationService: LocationService,
              private ipAddressService: IpAddressService,
              private weatherService: WeatherService) {
    setInterval(() => {

      // calculate time of day for background styling
      // TODO: use a sunrise and sunset calculator based on location
      const date = new Date();
      this.today = date.getTime();

      if (date.getHours() <= 16 && date.getHours() >= 12) {
        this.timeOfDay = 'day';
      }
      if (date.getHours() <= 11 && date.getHours() >= 7) {
        this.timeOfDay = 'morning';
      }
      if (date.getHours() <= 19 && date.getHours() >= 17) {
        this.timeOfDay = 'evening';
      }
      if (date.getHours() <= 6 || date.getHours() > 19) {
        this.timeOfDay = 'night';
      }
    }, 1);
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.ipAddressService.getIpAddress().subscribe((ipAddressData: any) => {
        this.locationService.getLocation(ipAddressData.ip)
          .subscribe((data: any) => {
            this.locationData = data.area.name;
            this.weatherService.getWeather(data.area.name).subscribe((weatherData: any) => {

            });
          });
      });

    });
  }


}
