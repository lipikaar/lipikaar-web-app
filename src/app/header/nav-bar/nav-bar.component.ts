import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public notLoggedIn = true;

  constructor(private account: AccountService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.account.getCurrentUser().subscribe((res) => {
      if (res) {
        this.notLoggedIn = !this.notLoggedIn;
      }
    });
  }
}
