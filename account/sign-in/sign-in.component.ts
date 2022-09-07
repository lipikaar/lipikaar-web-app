import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public user = {};
  public loggedUser = {};

  constructor(private account: AccountService) { }

  ngOnInit() {
  }

  checkCredentials() {
    this.account.login(this.user).subscribe(res => this.loggedUser = res);
  }
}
