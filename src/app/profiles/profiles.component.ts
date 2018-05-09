import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfilesService } from 'app/profiles/service/ProfilesService';
import * as _ from 'underscore';
import { PagerService } from '../service/pager.service';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  providers: [ ProfilesService ]
})
export class ProfilesComponent implements OnInit{

  private profiles: string[] = [];

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  pagedItemsUp: any[];
  pagedItemsDown: any[];
  // scroller
  myScroll: SmoothScrollToDirective;
  
  constructor(public translate: TranslateService,
              private profilesService: ProfilesService,
              private pagerService: PagerService) {
    this.myScroll = new SmoothScrollToDirective();
  }
  
  ngOnInit() {
    this.profilesService.getProfiles().subscribe(
      res => { 
        let profileRoute = "assets/profiles/";
        res.forEach(element => {
            this.profiles.push(profileRoute + element.toString());
        });
        this.setPage(1); 
      },
      err => {
        console.log("Error reading profile folder");
      }
    );
  }

  private setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.profiles.length, page);

    // get current page of items
    this.pagedItems = this.profiles.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.pagedItemsUp = this.pagedItems.slice(0,3);
    this.pagedItemsDown = this.pagedItems.slice(3,6);

    if (page != 1)
      this.myScroll.scrollTo = "#profiles";
    else
      this.myScroll.scrollTo = "#profileheader";
    this.myScroll.offset = 60;
    this.myScroll.onClick();

  }

}
