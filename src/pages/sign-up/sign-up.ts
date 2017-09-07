import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { UserProvider } from '../../providers/user/user';
import { Users } from '../../models/users';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
  //providers: [Users]
})
export class SignUpPage {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": ""};
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userProvider: UserProvider, public user:Users) { // , , 
    //console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  presentToast(message: string, duration: number = 5000) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'top'
    });
    toast.present();
  }

  signin(){
  	this.navCtrl.push(SignInPage)
  }

  signup(){
    /*
    this.rfi.getCategories().subscribe(data => {
      this.categoryList = data;
      console.log(this.categoryList);
    });
    */
    console.log(this.user);
    this.userProvider.addUser(this.user)
        .subscribe((result) => {
          this.presentToast('welcome');
          this.navCtrl.setRoot(HomePage);
        }, (err) => {
          this.presentToast(err);
          console.log(err);
        })
  }
}
