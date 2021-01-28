import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }


  // tslint:disable-next-line:typedef
  authenticate(username, password){
    // console.log('before ' + this.isUserLoggedIn());
    if (username === 'ikoujan' && password === 'dummy')
    {
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    else {
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  isUserLoggedIn(){
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  // tslint:disable-next-line:typedef
  logOut(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
