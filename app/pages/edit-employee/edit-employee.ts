import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {SQLite} from 'ionic-native'

@Component({
  templateUrl: 'build/pages/edit-employee/edit-employee.html',
})
export class EditEmployeePage {

  db: SQLite
  firstname: string
  lastname: string
  id: number
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.firstname = this.navParams.get('firstname')
    this.lastname = this.navParams.get('lastname')
    this.id = this.navParams.get('id')

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
    let sql = `UPDATE employee SET firstname=?, lastname=? WHERE id=?`;
    this.db.executeSql(sql, [this.firstname, this.lastname, this.id])
      .then(() => {
        this.navCtrl.pop()
      }, error => {
        console.log(error)
      });

  }

}
