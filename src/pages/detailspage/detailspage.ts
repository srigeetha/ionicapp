import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'detailspage.html',
})
export class DetailspagePage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get("item");
  }

}
