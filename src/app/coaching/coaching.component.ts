import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css'],
  providers: [ SmoothScrollToDirective ]
})
export class CoachingComponent implements OnInit {

  constructor(private translate: TranslateService,
              private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective()) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.myScroll.scrollTo = "#coaching";
    this.myScroll.offset = 80;
    this.myScroll.onClick();
  }

  private scrollToPlayer(){
    this.myScroll.scrollTo = "video-placeholder";
    this.myScroll.offset = 80;
    this.myScroll.onClick();
  }

}
