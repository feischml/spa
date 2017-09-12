import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoachesService {

  private coaches: Observable<any>;

  constructor(private http:Http) {
    this.coaches = this.http.get('./assets/source/data_source.json');
  }

  getCoaches(){
    return this.coaches;
  }

}
