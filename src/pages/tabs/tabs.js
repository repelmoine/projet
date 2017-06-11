"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var about_1 = require("../ajouter/ajouter");
var contact_1 = require("../cardList/cardList");
var connectedHome_1 = require("../connectedHome/connectedHome");
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = connectedHome_1.ConnectedHome;
        this.tab2Root = about_1.AboutPage;
        this.tab3Root = contact_1.ContactPage;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    core_1.Component({
        templateUrl: 'tabs.html'
    })
], TabsPage);
exports.TabsPage = TabsPage;
