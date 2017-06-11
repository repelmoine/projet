import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, setupPlatform } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Connected } from '../connected/connected';

declare var window: any;

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

    connected = Connected;

  public constructor(public navCtrl: NavController,
                     private platform: Platform,
                     private http: HttpModule,
                     private iab: InAppBrowser) {
  }

  public login() {
    console.log("plateform: "+this.platform);
    this.platform.ready().then( () => {
      console.log("this: "+this.iab);
      const clientId = "318644373180-ihn83p9kjb4npfj09jsu6ts23vfkcsem.apps.googleusercontent.com";
      const url = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}` +
          "&redirect_uri=http://localhost:8100" +
          "&scope=openid" +
          "&response_type=token";
      const browserRef = this.iab.create(
          url,
          "_blank",
          "location=no, clearsessioncache=yes, clearcache=yes"
      );
    }).then( () => {
        this.navCtrl.push('connected');
    });
  };

  public googleLogin(browserRef): Promise<any> {

    return new Promise(function (resolve, reject) {


      let responseParams: string;
      let parsedResponse: Object = {};
      browserRef.addEventListener("loadstart", (evt) => {
        if ((evt.url).indexOf("http://localhost:8100/callback") === 0) {
          browserRef.removeEventListener("exit", (evt) => {
          });
          browserRef.close();
          responseParams = ((evt.url).split("#")[1]).split("&");
          for (var i = 0; i < responseParams.length; i++) {
            parsedResponse[responseParams[i].split("=")[0]] = responseParams[i].split("=")[1];
          }
          if (parsedResponse["access_token"] !== undefined &&
              parsedResponse["access_token"] !== null) {
            resolve(parsedResponse);
          } else {
            reject("Problème d’authentification avec Google");
          }
        }
      });
      browserRef.addEventListener("exit", function (evt) {
        reject("Une erreur est survenue lors de la tentative de connexion à Google");
      });
    });
  }
}
