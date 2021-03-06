import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {

  constructor(private http: HttpClient) {
  }

  getIpAddress() {
    return this.http.get('http://api.ipify.org/?format=json');
  }
}
