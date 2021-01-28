import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'ikoujan';
  password = '';
  errorMessage = 'invalid credentials';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }
  handleLogin(): void{
    // console.log(this.username);
    // if (this.username === 'ikoujan' && this.password === 'dummy')
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password))
    {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
  }
}
