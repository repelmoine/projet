"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connected_1 = require("../connected/connected");
var HomePage = (function () {
    function HomePage(navCtrl, platform, http, iab) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.http = http;
        this.iab = iab;
        this.connected = connected_1.Connected;
    }
    HomePage.prototype.login = function () {
        var _this = this;
        console.log("plateform: " + this.platform);
        this.platform.ready().then(function () {
            console.log("this: " + _this.iab);
            var clientId = "318644373180-ihn83p9kjb4npfj09jsu6ts23vfkcsem.apps.googleusercontent.com";
            var url = "https://accounts.google.com/o/oauth2/auth?client_id=" + clientId +
                "&redirect_uri=http://localhost:8100" +
                "&scope=openid" +
                "&response_type=token";
            var browserRef = _this.iab.create(url, "_blank", "location=no, clearsessioncache=yes, clearcache=yes");
        }).then(function () {
            _this.navCtrl.push('connected');
        });
    };
    ;
    HomePage.prototype.googleLogin = function (browserRef) {
        return new Promise(function (resolve, reject) {
            var responseParams;
            var parsedResponse = {};
            browserRef.addEventListener("loadstart", function (evt) {
                if ((evt.url).indexOf("http://localhost:8100/callback") === 0) {
                    browserRef.removeEventListener("exit", function (evt) {
                    });
                    browserRef.close();
                    responseParams = ((evt.url).split("#")[1]).split("&");
                    for (var i = 0; i < responseParams.length; i++) {
                        parsedResponse[responseParams[i].split("=")[0]] = responseParams[i].split("=")[1];
                    }
                    if (parsedResponse["access_token"] !== undefined &&
                        parsedResponse["access_token"] !== null) {
                        resolve(parsedResponse);
                    }
                    else {
                        reject("Problème d’authentification avec Google");
                    }
                }
            });
            browserRef.addEventListener("exit", function (evt) {
                reject("Une erreur est survenue lors de la tentative de connexion à Google");
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        templateUrl: 'home.html'
    })
], HomePage);
exports.HomePage = HomePage;
