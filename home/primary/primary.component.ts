import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'home-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

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
