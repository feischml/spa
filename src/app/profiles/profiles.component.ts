import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfilesService } from 'app/profiles/service/ProfilesService';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  providers: [ ProfilesService ]
})
export class ProfilesComponent implements OnInit {

  private profiles;
  
  constructor(public translate: TranslateService,
              private profilesService: ProfilesService) { }
  
  ngOnInit() {
    this.profilesService.getProfiles().subscribe(
      res => { this.profiles = res; console.log(this.profiles) },
      err => console.log("Error reading profile folder")
    );
  }

}
