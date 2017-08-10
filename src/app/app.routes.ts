import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { MainpageComponent }  from './mainpage/mainpage.component';
import { ConsoleComponent,ConsoleGanttComponent,ConsoleGraphsComponent,ConsoleTasklistComponent,ConsoleDifficultiesComponent,ConsoleUpdateComponent,ConsoleMembersComponent,ConsoleInformationwallComponent } from './console/console.component';
import {EmailComponent} from './email/email.component';
import {SignupComponent} from './signup/signup.component';
import { AuthGuard } from './auth.service';

export const routes : Routes = [
    {
        path: '',
        component: MainpageComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
     { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: '', component: MainpageComponent, canActivate: [AuthGuard] },

    {
        path: 'console/:id',
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