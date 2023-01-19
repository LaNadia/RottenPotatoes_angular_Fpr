import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errMessage = '';

  constructor(private auth: AuthService, private router: Router){}

  login(){
    if(this.username.trim().length === 0 ) {
      this.errMessage = "Username is required"
    } else if (this.password.trim().length === 0 ) {
      this.errMessage = "Password is required"
    } else {
      this.errMessage = '';
      let res = this.auth.login(this.username, this.password);
      if( res == 200 ) {
        this.router.navigate(['home'])
      }
      if( res == 403 ) {
        this.errMessage = 'Invalid Credentials';
      }
    }
  }

}
