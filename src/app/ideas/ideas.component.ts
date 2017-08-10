import { Component, OnInit,ViewChild } from '@angular/core';
import {IdeasService } from 'app/ideas.service';
import { ModalDirective } from 'ng2-bootstrap/modal';

declare var firebase :any;
@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
 @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('lgModal') public lgModal:ModalDirective;
ideas=[];
team_members=[];
pinglist=[];
p_duration:string;
project_status:number;
console_data=[];
task=[];
links=[];
update=[];
infowall=[];
difficulty=[];
id:number=1;text:string='a';start_date:string='2017-04-15 00:00';
duration :number=6;progress: number=0.5;parent: number=1;

source:number=1;target:number=1;type:string="0";
date:string='2017-04-15 00:00';/*task_id,progress*/hours_spent:number=1;

user: string='Myra';/*text*/
diff:string='tv_remote';solution:string='chachi_ki_chamat';
  constructor(private _ideaService:IdeasService) { }

  ngOnInit() {
    
    this.fbGetData();
    
  }

  fbPostData(name,email,project_name,description,skills){
  this.team_members=[name];
  this.pinglist=[{name,email}];
  this.task=[{id:this.id,text:this.text,start_date:this.start_date,duration:this.duration,progress:this.progress}];
  this.links=[{id:this.id,source:this.source,target:this.target,type:this.type}];
  this.update=[{date:this.date,task_id:this.id,progress:this.progress,hours_spent:this.hours_spent}];
  this.infowall=[{user:this.user,text:this.text}];
  this.difficulty=[{dif:this.diff,solution:this.solution}];
  this.console_data=[{task:this.task,links:this.links,update:this.update,infowall:this.infowall,difficulty:this.difficulty}];
           firebase.database().ref( '/' ).push({name:name,
             email:email,
             project_name:project_name,
             description:description,
             skills:skills,
             team_members:this.team_members,
             pinglist:this.pinglist,
             p_duration:"90 days",
             project_status:0,
             console_data:this.console_data
      });
this.showChildModal();    
    
  } 
  showChildModal(){
      this.childModal.show();

  }

public hideChildModal():void {
    this.childModal.hide();
    this.lgModal.hide();
    
   
  }
   fbGetData(){
        firebase.database().ref( '/' ).orderByChild("project_status").equalTo(0).on('child_added',(snapshot) =>{
          //console.log(snapshot.val())
          this.ideas.push(snapshot.val())
        });
        
        
      }

    ping(project_name){
      var key;
var user = firebase.auth().currentUser;
var username = user.displayName;
var em = user.email;

      //console.log(project_name);
      firebase.database().ref( '/' ).orderByChild("project_name").equalTo(project_name).on('child_added',(snapshot) =>{
          //console.log(snapshot.key);
          key=snapshot.key;
          this.ideas.push(snapshot.val());
        });

        var ref= firebase.database().ref('/'+key);
      var postsRef = ref.child("pinglist");

var newPostRef = postsRef.push();
newPostRef.set({
  name: username,
  email: em
});

      
    }
}


