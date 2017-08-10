import { Component, OnInit,ViewChild } from '@angular/core';
import {IdeasService } from 'app/ideas.service';
import {NgFor} from '@angular/common';
import { Router } from '@angular/router';

declare var firebase :any;

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {
  ideas=[];
  pinglist=[];
objectArray=[];
project_name;
members=[];
  constructor(private _ideaService:IdeasService,private router: Router) { }

  ngOnInit() {
    this.fbGetData();
  }

  oncheck(name){
    this.members.push(name);
    console.log(name);
  }
onuncheck(name){
    //var x=this.members.pop();
   // console.log(name);
  }
  getProject(project_name){
    var count=0;
    var obj=[];
    //console.log(project_name);
    firebase.database().ref('/').orderByChild("project_name").equalTo(project_name).on("child_added", function(snapshot) {
  //console.log(snapshot.child("pinglist").val());
  
snapshot.child("pinglist").forEach(element => {
  obj.push(element.val()); 
  });

});
   // console.log(obj); 
    this.objectArray=obj; 
  }

  addMembers(project_name){
        
      var key;

      //console.log(project_name);
      firebase.database().ref( '/' ).orderByChild("project_name").equalTo(project_name).on('child_added',(snapshot) =>{
          //console.log(snapshot.key);
          key=snapshot.key;
          //this.ideas.push(snapshot.val());
        });

        var ref= firebase.database().ref('/'+key);
      var postsRef = ref.child("team_members");
this.members.forEach(element => {
  var mname= element;
var newPostRef = postsRef.push({
    mname
}); 
});

this.router.navigate(['/console', project_name]);
    console.log(project_name);
  }

  fbGetData(){
        firebase.database().ref( '/' ).on('child_added',(snapshot) =>{
         // console.log(snapshot.val());
          this.ideas.push(snapshot.val());
         

        });
        
        
      }

}



