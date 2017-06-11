import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NFC, Ndef } from '@ionic-native/nfc';

import { Ajouter } from '../pages/ajouter/ajouter';
import { CardList } from '../pages/cardList/cardList';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Connected } from '../pages/connected/connected';
import { ConnectedHome } from '../pages/connectedHome/connectedHome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Ajouter,
    CardList,
    HomePage,
    TabsPage,
    Connected,
    ConnectedHome
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: Connected, name: 'connected', segment: 'connected' }
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Ajouter,
    CardList,
    HomePage,
    TabsPage,
    Connected,
    ConnectedHome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    NFC,
    Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
