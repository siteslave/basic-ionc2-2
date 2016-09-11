import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {NewEmployeePage} from '../new-employee/new-employee'

@Component({
  templateUrl: 'build/pages/employee/employee.html',
})
export class EmployeePage {

  constructor(private navCtrl: NavController) {

  }

  goNewPage() {
    let employeeData: Object = {id: 12345, name: 'Test user'}
    this.navCtrl.push(NewEmployeePage, employeeData)
  }

}
