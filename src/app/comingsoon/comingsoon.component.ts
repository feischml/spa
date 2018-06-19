import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SourceService } from 'app/service/source.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css'],
  providers: [SourceService]
})
export class ComingsoonComponent implements OnInit {

  public features;
  private browser = null;

  constructor(public translate: TranslateService,
    private sourceService: SourceService,
    private deviceService: DeviceDetectorService) {
    this.browser = this.deviceService.getDeviceInfo().browser;
  }

  ngOnInit() {
    this.sourceService.getSource().subscribe(
      res => this.features = res.json()['features']
    )
  }

  public checkBrowser(feature): boolean {
    switch (this.browser) {
      case "chrome": {
        return true;
      }
      case "firefox": {
        return true;
      }
      case "safari": {
        return true;
      }
      default: {
        if (feature.link == "rankings")
          return true;
        else
          return false;
      }
    }
  }

}
