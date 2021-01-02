import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationService} from '../services/location.service';
import {IpAddressService} from '../services/ip-address.service';
import {PhotoService} from '../services/photo.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  public locationData: any;
  public backgroundPhoto: any;
  today: number = Date.now();

  constructor(private locationService: LocationService,
              private ipAddressService: IpAddressService,
              private photoService: PhotoService) {
    // getting time
    setInterval(() => {
      this.today = Date.now();
    }, 1);
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.ipAddressService.getIpAddress().subscribe((ipAddressData: any) => {
        this.locationService.getLocation(ipAddressData.ip)
          .subscribe((data: any) => {
            this.locationData = data.area.name;
            this.photoService.getPhoto(data.area.name).subscribe((photoData: any) => {
                this.backgroundPhoto = photoData.value[0].contentUrl;
            });
          });
      });

    });
  }


}
