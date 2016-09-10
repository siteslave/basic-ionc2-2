import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  myName: string
  fullname: string
  
  constructor(private navCtrl: NavController) {
    this.myName = 'Steve Job'
    this.fullname = 'Satit Rinapit'
  }

}
