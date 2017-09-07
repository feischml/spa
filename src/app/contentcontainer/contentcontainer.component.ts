import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-contentcontainer',
  templateUrl: './contentcontainer.component.html',
  styleUrls: ['./contentcontainer.component.css']
})
export class ContentcontainerComponent implements OnInit {

  constructor( public translate: TranslateService ) { }

  ngOnInit() {
  }

}
