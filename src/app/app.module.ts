import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FireService } from '../services/fire-sevice';
import { Page2Page} from '../pages/page2/page2';
import { Page4Page} from '../pages/page4/page4';


// Initialize Firebase : configuracion de firebase
var config = {
  apiKey: "##########################",
  authDomain: "##############",
  databaseURL: "##############",
  projectId: "##############",
  storageBucket: "##############",
  messagingSenderId: "##############"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page2Page,
    Page4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page2Page,
    Page4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, FireService
  ]
})
export class AppModule {}
