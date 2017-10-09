import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';
import { MatDialogRef, MdDialog } from '@angular/material';
import { LoginComponent } from 'app/header/login/login.component';

@Component({
  selector: 'app-header',
  providers: [SmoothScrollToDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private lodginDialog: LoginComponent;

  constructor(public translate: TranslateService,
    private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective(),
    public dialog: MdDialog) {
  }

  ngOnInit() { }

  // scroll to specified element
  private scrollTo(element: String) {
    this.myScroll.scrollTo = element;
    this.myScroll.duration = 2500;
    this.myScroll.offset = 80;
    // trigger the scroll
    this.myScroll.onClick();
  }

  private login() {
    let dialogRef = this.dialog.open(LoginComponent);
  }
}
