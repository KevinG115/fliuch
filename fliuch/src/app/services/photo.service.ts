import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {
  }

  getPhoto(photoSearch: string) {
    return this.http.get('https://bing-image-search1.p.rapidapi.com/images/search?q=' + photoSearch,
      {
        headers: {
          'x-rapidapi-key': environment.raidApiKey,
          'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
        },
      });
  }
}
