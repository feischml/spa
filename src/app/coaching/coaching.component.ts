import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css'],
  providers: [SmoothScrollToDirective]
})
export class CoachingComponent implements OnInit {

  private iframe_html: any;
  private url = "https://www.youtube.com/watch?v=7si_4wdoQAI";

  constructor(private translate: TranslateService,
    private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective(),
    private embedService: EmbedVideoService) {
    this.iframe_html = this.embedService.embed(this.url);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.myScroll.scrollTo = "#coaching";
    this.myScroll.offset = 80;
    this.myScroll.onClick();
  }

  private scrollToPlayer(vidId: string) {
    this.myScroll.scrollTo = "#video-placeholder";
    this.myScroll.offset = 80;
    this.myScroll.onClick();

    this.iframe_html = this.embedService.embed_youtube(vidId);
  }

}
