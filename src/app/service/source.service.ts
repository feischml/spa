import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SourceService {

  private source: Observable<any>;

  constructor(private http:Http) {
    this.source = this.http.get('./assets/source/data_source.json');
  }

  getSource(){
    return this.source;
  }

}
