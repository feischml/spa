import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { constants } from '../../app.constants';

@Injectable()
export class ProfilesService {

  private profiles;

  constructor(private http:Http) {
    this.profiles = this.http.get(constants.serverURL + "/get_profiles").map(
        res => res.json()
    );
  }

  getProfiles(){
    return this.profiles;
  }

}
