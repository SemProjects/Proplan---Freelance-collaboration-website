import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { IdeasComponent } from './ideas/ideas.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { AngularFireModule } from 'angularfire2';
import { OngoingComponent } from './ongoing/ongoing.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { ModalModule } from 'ng2-bootstrap/modal';
import { IdeacardComponent } from './ideacard/ideacard.component';
import { AlertModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap';
import { OngoingcardComponent } from './ongoingcard/ongoingcard.component';
import { MyprojectcardComponent } from './myprojectcard/myprojectcard.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ConsoleComponent,ConsoleGanttComponent,ConsoleGraphsComponent,ConsoleTasklistComponent,ConsoleDifficultiesComponent,ConsoleUpdateComponent,ConsoleMembersComponent,ConsoleInformationwallComponent } from './console/console.component';
import {routing} from './app.routes';
import { MembercardComponent } from './membercard/membercard.component';

import { ChartsModule } from 'ng2-charts';
import { ChartsSectionComponent } from './charts-section';
import { BarChartDemoComponent } from './charts/bar-chart-demo';
import { ChartSectionComponent } from './chart-section.component';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './services/in-memory-data.service';
import {GanttComponent} from "./components/gantt.component";
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component'
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyCBjyKgCrfOHRDnbZ6ZIDKdBIhJ_P6OfzY',
  authDomain: 'proplan-2df9a.firebaseapp.com',
  databaseURL: 'https://proplan-2df9a.firebaseio.com',
  storageBucket: 'proplan-2df9a.appspot.com',
  messagingSenderId: '950201767034'
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    IdeasComponent,
    OngoingComponent,
    MyprojectsComponent,
    IdeacardComponent,
    OngoingcardComponent,
    MyprojectcardComponent,
    MainpageComponent,
    ConsoleComponent,
    ConsoleGanttComponent,
    ConsoleGraphsComponent,
    ConsoleTasklistComponent,
    ConsoleDifficultiesComponent,
    ConsoleUpdateComponent,
    ConsoleMembersComponent,
    ConsoleInformationwallComponent,
    MembercardComponent,
    ChartSectionComponent,
    ChartsSectionComponent,
    BarChartDemoComponent,
    GanttComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageScrollModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
