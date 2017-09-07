import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-squash',
  templateUrl: './squash.component.html',
  styleUrls: ['./squash.component.css']
})
export class SquashComponent implements OnInit {

  constructor( public translate: TranslateService ) { }

  ngOnInit() {
  }

}
