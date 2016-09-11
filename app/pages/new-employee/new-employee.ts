import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/new-employee/new-employee.html',
})
export class NewEmployeePage {

  employeeId: any
  employeeName: string
  
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.employeeId = this.navParams.get('id')
    this.employeeName = this.navParams.get('name')
  }

}
