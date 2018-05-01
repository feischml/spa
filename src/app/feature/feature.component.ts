import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() feature;

  constructor(public translate: TranslateService,
              private router: Router) { }

  ngOnInit() {
  }

  private navigateTo(){
    if (this.feature.link)
      this.router.navigate([this.feature.link]);
  }

}
