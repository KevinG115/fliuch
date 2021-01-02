import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationService} from '../services/location.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public locationData: any;
  today: number = Date.now();

  constructor(private locationService: LocationService) {
    setInterval(() => {this.today = Date.now()}, 1);
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.locationService.getLocation('')
        .subscribe((data: any) => {
          console.log(data);
          // console.log(data);
          this.locationData = data;
        });
    });
  }


}
