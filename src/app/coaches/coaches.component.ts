import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SourceService } from '../service/source.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
  providers: [ SourceService ]
})
export class CoachesComponent implements OnInit {

  private coaches;

  constructor(public translate: TranslateService,
              private sourceService: SourceService) { }

  ngOnInit() {
    this.sourceService.getSource().subscribe(
      res => this.coaches = res.json()['coaches']
    );
  }

}
