import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  employees: any[]

  constructor(private navCtrl: NavController) {
    this.employees = [
      {id: 1001, name: 'Steve Job'},
      {id: 1002, name: 'John Doe'},
      {id: 1003, name: 'Bill Gate'},
    ]

  }

}
