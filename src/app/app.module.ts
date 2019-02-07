import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
const config = {
  apiKey: "AIzaSyB9dTYI_jV1n1CimjuI8ovl5oB6D7j0-JA",
  authDomain: "gitalife1-82fe2.firebaseapp.com",
  databaseURL: "https://gitalife1-82fe2.firebaseio.com",
  projectId: "gitalife1-82fe2",
  storageBucket: "gitalife1-82fe2.appspot.com",
  messagingSenderId: "568759556873"
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
