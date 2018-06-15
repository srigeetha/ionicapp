import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceproviderProvider } from '../../providers/serviceprovider/serviceprovider';
import { DetailspagePage } from '../detailspage/detailspage';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[ServiceproviderProvider]
})
export class AboutPage {
  items:any;
  keys:any;
  constructor(public navCtrl: NavController,public sp: ServiceproviderProvider) {
    console.log("In about constructor");
  this.getPost();

}

getPost(){
this.sp.getPost().subscribe(response=>{
  this.keys=Object.keys(response);
  this.items= response[this.keys[1]].children;
  console.log(response[this.keys[1]].children);
},err=>{});
}

viewDetails(item){
this.navCtrl.push(DetailspagePage,{
  item:item
});
}
}