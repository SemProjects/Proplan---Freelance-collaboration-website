import { Component, OnInit } from '@angular/core';
import {  HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn } from './app/router.animation';
import {moveIn}  from 'app/router.animation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

 error: any;
 username: string;
    constructor(public af: AngularFire,private router: Router) {

      this.af.auth.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl(' ');
      }
    });
  }

loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(
        (success) => {
        this.router.navigate(['']);
        var user = firebase.auth().currentUser;
// var email, photoUrl, uid, emailVerified;

// if (user != null) {
//   this.username = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }
// console.log(this.username);
// console.log(email);
// console.log(photoUrl);
// console.log(emailVerified);



      }).catch(
        (err) => {
        this.error = err;
      })
  }

  ngOnInit() {
  }

}
