import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {MainpageComponent} from 'app/mainpage/mainpage.component';
import { ConsoleComponent,ConsoleGanttComponent,ConsoleGraphsComponent,ConsoleTasklistComponent,ConsoleDifficultiesComponent,ConsoleUpdateComponent,ConsoleMembersComponent,ConsoleInformationwallComponent } from './console/console.component';


export const routes : Routes = [
    {
        path: '',
        component: MainpageComponent
    },
    {
        path: 'console',
        component: ConsoleComponent,
    children: [
      { path: '', component: ConsoleGanttComponent },
      { path: 'graphs', component: ConsoleGraphsComponent },
      { path: 'tasklist', component: ConsoleTasklistComponent },
      { path: 'difficulties', component: ConsoleDifficultiesComponent },
      { path: 'update', component: ConsoleUpdateComponent },
      { path: 'members', component: ConsoleMembersComponent },
      { path: 'informationwall', component: ConsoleInformationwallComponent }
    ]
    }
    
]

export const routing = RouterModule.forRoot(routes);