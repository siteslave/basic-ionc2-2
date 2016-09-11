import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {SQLite} from 'ionic-native'

@Component({
  templateUrl: 'build/pages/new-employee/new-employee.html',
})
export class NewEmployeePage {
  db: SQLite

  firstname: string
  lastname: string

  constructor(private navCtrl: NavController) {
    this.db = new SQLite();

    this.db.openDatabase({
      name: 'employee.db',
      location: 'default'
    }).then(() => {
      //
    }, error => {
      console.log(error)
    });

  }

  save() {
    let sql = `INSERT INTO employee (firstname, lastname) VALUES(?, ?)`;
    this.db.executeSql(sql, [this.firstname, this.lastname])
      .then(() => {
        this.navCtrl.pop()
      }, error => {
        console.log(error)
      });

  }

}
