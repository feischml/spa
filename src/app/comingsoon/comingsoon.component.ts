import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SourceService } from 'app/service/source.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css'],
  providers: [ SourceService ]
})
export class ComingsoonComponent implements OnInit {

  private features;

  constructor(public translate: TranslateService,
              private sourceService: SourceService) { }

  ngOnInit() {
    this.sourceService.getSource().subscribe(
      res => this.features = res.json()['features']
    )
  }

}
