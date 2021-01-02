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

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Basic ' +
      btoa('x-rapidapi-key:' + environment.raidApiKey));
  }

  getGeoLocation() {
    let geolocation;
    this.geolocation$.subscribe(position => {
      geolocation = position;
    });

    return location;

  }

  getLocationDetails(longitude: number, latitude: number) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='
      + longitude + ','
      + latitude +
      '&key=' + environment.googleApiKey);
  }


  getLocation(ipAddress: string) {
    return this.http.get('https://ip-geo-location.p.rapidapi.com/ip/89.101.167.249', {
      headers: {'x-rapidapi-key': environment.raidApiKey}
    });

  }
}
