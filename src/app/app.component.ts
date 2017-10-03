import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "ro"]);
    translate.setDefaultLang("ro"); 

    //let browserLang: string = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
  }  
}
