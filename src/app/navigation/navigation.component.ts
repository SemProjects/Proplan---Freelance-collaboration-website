import { Component, OnInit, Input } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
name : any;
username: string = '';

  constructor(public af: AngularFire, private router: Router) {
    
        PageScrollConfig.defaultScrollOffset = 50;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing 
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };

        
         var user = firebase.auth().currentUser;
var email, photoUrl, uid, emailVerified;

if (user != null) {
  this.username = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
else {
  this.username = 'Login';
}
console.log(this.username);
console.log(email);
console.log(photoUrl);
console.log(emailVerified);

        this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        // console.log(this.name.auth.displayName);
      }
    });


     }

    logout() {
     this.af.auth.logout();
     console.log("Logging Out");
     this.router.navigate(['']);
         firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
             console.log("logged in");
         } else{
             console.log("logged out");
          }
        });
      this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        console.log(this.name.auth.displayName);  
      }
    });

  }

  ngOnInit() {
  }

}
