import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() feature;
  private browser = null;

  constructor(public translate: TranslateService,
    private router: Router,
    private deviceService: DeviceDetectorService) {
    this.browser = this.deviceService.getDeviceInfo().browser;
  }

  ngOnInit() {
  }

  private checkBrowser(): boolean {
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
        if (this.feature.link == "rankings")
          return true;
        else
          return false;
      }
    }
  }

  public navigateTo() {
    if (this.feature.link && this.checkBrowser())
      this.router.navigate([this.feature.link]);
  }

}
