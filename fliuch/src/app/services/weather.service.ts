import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getWeather(location: string) {
    return this.http.get('https://community-open-weather-map.p.rapidapi.com/weather?q=Kerry', {
      headers: {'x-rapidapi-key': environment.raidApiKey}
    });
  }
}
