import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() { }

}
