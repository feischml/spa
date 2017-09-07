import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-comingsoon',
    templateUrl: './comingsoon.component.html',
    styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {

    constructor( public translate: TranslateService ) { }

    ngOnInit() { }

}
