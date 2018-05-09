import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';
import { SourceService } from '../service/source.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
  providers: [SmoothScrollToDirective, SourceService]
})
export class RankingsComponent implements OnInit, AfterViewInit {

  private laitekBeginners;
  private laitekAdvanced;

  constructor(public translate: TranslateService,
    private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective(),
    private sourceService: SourceService) { }

  ngOnInit() {
    this.sourceService.getSource().subscribe(
      res => {
        this.laitekAdvanced = res.json()['laitekadvanced'];
        this.laitekBeginners = res.json()['laitekbeginners'];

        //sort after place
        this.laitekAdvanced.sort(function (a, b) {
          return a.place - b.place;
        });
        this.laitekBeginners.sort(function (a, b) {
          return a.place - b.place;
        });
      }
    )
  }

  ngAfterViewInit(): void {
    this.myScroll.scrollTo = "#rankings";
    this.myScroll.offset = 80;
    this.myScroll.onClick();
  }

}
