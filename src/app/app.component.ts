import { Component, AfterViewInit, OnInit} from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit{
  
  ngOnInit(): void {
    console.log("Init strated " + new Date());
  }

  ngAfterViewInit(): void {
    console.log("Ended " + new Date());
  }

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "ro"]);
    translate.setDefaultLang("ro"); 

    let browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
  }  
}
