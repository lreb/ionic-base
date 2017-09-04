import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'
import { ListPage } from '../list/list';
import { SignUpPage } from '../sign-up/sign-up'
/**
 * Generated class for the SignInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  responseData : any;
  userData = {"password": "", "email": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signin(){
    // Your app login API web service call triggers 
    this.navCtrl.setRoot(HomePage, {}, {animate: false});
  }

  signup(){
    // Your app login API web service call triggers 
    this.navCtrl.push(SignUpPage);
  }

}
