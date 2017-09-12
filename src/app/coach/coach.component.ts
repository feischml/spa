import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  @Input() coach;

  constructor() { }

  ngOnInit() {
  }

}
