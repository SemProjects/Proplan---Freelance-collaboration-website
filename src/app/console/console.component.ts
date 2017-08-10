import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'ganttchart',
  template: `<div style=" font-size: 22px; font-family:Montserrat,Helvetica Neue, Helvetica, Arial, sans-serif; margin-left:45%;margin-top: 100px;margin-bottom:30px;margin-right:45%;width:20%;">GANTT CHART</div>
  <gantt></gantt>`
})
export class ConsoleGanttComponent { }

@Component({
  selector: 'graphs',
  template: `<charts-section></charts-section> `
})
export class ConsoleGraphsComponent { 
  public ngAfterContentInit(): any {
    setTimeout(()=>{
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}

@Component({
  selector: 'tasklist',
  templateUrl: './todo.html'
})

export class ConsoleTasklistComponent { }


@Component({
  selector: 'difficulties',
   templateUrl: './difficulties.html'
})
export class ConsoleDifficultiesComponent { }

@Component({
  selector: 'update',
   templateUrl: './update.html'
})
export class ConsoleUpdateComponent implements OnInit{ 
 
 ngOnInit() {
        
  }
fbPostData(TName,DName,SName,Date,Time,Percent){
  console.log(TName);

}
}

@Component({
  selector: 'members',
  templateUrl: './members.html'
})
export class ConsoleMembersComponent { }

@Component({
  selector: 'informationwall',
  templateUrl: './inform.html'
})
export class ConsoleInformationwallComponent { }



@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {
  id: string;
  private sub: any;

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  }

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
 }

  hide_visibility() {
          document.getElementById("mainNav").style.display = 'none';
   }
   show_visibility() {
          document.getElementById("mainNav").style.display = 'block';
   }

  constructor(private route: ActivatedRoute) {
    console.log(this.id);
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(this.id); 
    }); 
  }

}
