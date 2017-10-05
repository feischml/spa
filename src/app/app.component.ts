import { Component, AfterViewInit, ChangeDetectorRef, OnInit, AfterViewChecked } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, AfterViewChecked{
  ngOnInit(): void {
    console.log("started "+new Date().toString());
  }

  ngAfterViewChecked(): void {
    console.log("ended check "+new Date().toString());
  }

  ngAfterViewInit(): void {
    console.log("ended "+new Date().toString());
  }


  constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {
    translate.addLangs(["en", "ro"]);
    translate.setDefaultLang("ro"); 

    //let browserLang: string = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
  }  
}
