import { Component, OnInit, ElementRef, Renderer, ViewContainerRef } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';
import { MatDialogRef, MdDialog } from '@angular/material';
import { LoginComponent } from 'app/header/login/login.component';
//import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  providers: [SmoothScrollToDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //private lodginDialog: LoginComponent;

  //user: SocialUser;   
  private browser = null;

  constructor(public translate: TranslateService,
    public toastr: ToastsManager,
    private vRef: ViewContainerRef,
    private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective(),
    public dialog: MdDialog,
    //private authService: AuthService,
    private el: ElementRef, 
    private renderer: Renderer,
    private deviceService: DeviceDetectorService) {
      this.toastr.setRootViewContainerRef(this.vRef);
      this.browser = this.deviceService.getDeviceInfo().browser;
  }

  ngOnInit(){
    //this.authService.authState.subscribe((user) => {
    //    this.user = user
    //});
    if (this.checkBrowser() == false)
      this.toastr.warning('For the best experience and all the features please use Chrome, Safari, Firefox browsers.', null, { toastLife: 10000 });
  }

  // scroll to specified element
  private scrollTo(element: String) {
    this.myScroll.scrollTo = element;
    this.myScroll.duration = 2500;
    this.myScroll.offset = 80;
    // trigger the scroll
    this.myScroll.onClick();

    // close the navigation bar
    this.closeNavbar();          
  }

  private closeNavbar(){
    let navbar = this.el.nativeElement.querySelector('.navcol-1');
    this.renderer.setElementClass(navbar, 'in', false);
  }

  /*private login() {
    this.closeNavbar();
    // check if dialog already opened
    if (this.dialog.openDialogs.length == 0 )
      this.dialog.open(LoginComponent, { width: "320px", height: "380px"});
  }*/

  /*private logout() {
    this.closeNavbar();
    this.authService.signOut().catch( 
      err => console.log(err)
    );
  }*/

  private checkBrowser(): boolean {
    switch (this.browser) {
      case "chrome": {
        return true;
      }
      case "firefox": {
        return true;
      }
      case "safari": {
        return true;
      }
      default: {
          return false;
      }
    }
  }
}
