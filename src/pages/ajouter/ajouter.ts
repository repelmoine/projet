import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';

@Component({
  selector: 'page-about',
  templateUrl: 'ajouter.html'
})

export class Ajouter {


  constructor(public navCtrl: NavController,private nfc: NFC, private ndef: Ndef) {

  }

  public read(){
    this.nfc.addNdefListener(function () {
      console.log("Ok")
    },
    function () {
      console.log("KO");
    })
  }
}
