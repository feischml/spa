import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';
import { MatDialogRef, MdDialog } from '@angular/material';
import { LoginComponent } from 'app/header/login/login.component';
import { AuthService } from 'angular4-social-login';
import { SocialUser } from 'angular4-social-login';

@Component({
  selector: 'app-header',
  providers: [SmoothScrollToDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private lodginDialog: LoginComponent;

  user: SocialUser;   

  constructor(public translate: TranslateService,
    private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective(),
    public dialog: MdDialog,
    private authService: AuthService,
    private el: ElementRef, 
    private renderer: Renderer) {
  }

  ngOnInit(){
    this.authService.authState.subscribe((user) => {
        this.user = user
    });

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

  private login() {
    this.closeNavbar();
    // check if dialog already opened
    if (this.dialog.openDialogs.length == 0 )
      this.dialog.open(LoginComponent, { width: "320px", height: "380px"});
  }

  private logout() {
    this.closeNavbar();
    this.authService.signOut().catch( 
      err => console.log(err)
    );
  }
}
