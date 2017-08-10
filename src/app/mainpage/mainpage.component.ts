import { Component, OnInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import {moveIn, fallIn, moveInLeft}  from 'app/router.animation';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
name: any;
  constructor(/*public af: AngularFire,private router: Router*/) {

    //this.af.auth.subscribe(auth => {
      //if(auth) {
        //this.name = auth;
      //}
    //});

  }

  ngOnInit() {
  }

}
