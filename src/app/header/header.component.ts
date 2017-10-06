import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-header',
  providers: [ SmoothScrollToDirective ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService,
              private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective()) { 
  }

  ngOnInit() { }

  // scroll to specified element
  private scrollTo(element: String){
    this.myScroll.scrollTo = element;
    this.myScroll.duration = 2500;
    this.myScroll.offset = 80;
    // trigger the scroll
    this.myScroll.onClick();
  }

}
