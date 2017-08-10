import { Component, OnInit } from '@angular/core';
import {IdeasService } from 'app/ideas.service';
@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.scss']
})
export class OngoingComponent implements OnInit {
ideas=[];
  constructor() { }

  ngOnInit() {
this.fbGetData();  
}
  fbGetData(){
        firebase.database().ref( '/' ).on('child_added',(snapshot) =>{
          //console.log(snapshot.val())
          this.ideas.push(snapshot.val())
        });
        
        
      }

}
