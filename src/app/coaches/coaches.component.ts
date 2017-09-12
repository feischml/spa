import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { CoachesService } from 'app/coaches/service/coaches.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
  providers: [ CoachesService ]
})
export class CoachesComponent implements OnInit {

  private coaches;

  constructor(public translate: TranslateService,
              private coachesService: CoachesService) { }

  ngOnInit() {
    // get the coaches from observable
    this.coachesService.getCoaches().subscribe(
      res => this.coaches = res.json()['coaches']
    );
  }

}
