import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs'

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  username: string
  password: string

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

  }

  doLogin() {
    if (this.username == 'admin' && this.password == '1234') {
      this.navCtrl.setRoot(TabsPage)
    } else {
      let alert = this.alertCtrl.create({
        title: 'เกิดข้อผิดพลาด!',
        subTitle: 'ชื่อผู้ใช้งาน/รหัสผ่าน ไม่ถูกต้อง',
        buttons: ['ตกลง']
      });
      alert.present();
    }
  }

}
