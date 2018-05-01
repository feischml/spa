import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
  providers: [ SmoothScrollToDirective ] 
})
export class RankingsComponent implements OnInit {

  constructor(public translate: TranslateService,
              private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective()) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.myScroll.scrollTo = "#rankings";
    this.myScroll.offset = 80;
    this.myScroll.onClick();
  }

}
