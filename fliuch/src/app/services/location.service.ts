import {Injectable} from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private readonly geolocation$: GeolocationService, private http: HttpClient) {
  }

  getLocation(ipAddress: string) {
    return this.http.get('https://ip-geo-location.p.rapidapi.com/ip/' + ipAddress, {
      headers: {'x-rapidapi-key': environment.raidApiKey}
    });
  }
}
