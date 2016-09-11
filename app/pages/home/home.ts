import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {SQLite} from 'ionic-native'

import {NewEmployeePage} from '../new-employee/new-employee'
import {EditEmployeePage} from '../edit-employee/edit-employee'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
  
export class HomePage {

  db: SQLite
  employees: any[]

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) {
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

  newEmployee() {
    this.navCtrl.push(NewEmployeePage)
  }

  getList() {
    let sql = `SELECT * FROM employee`;
    this.db.executeSql(sql, [])
      .then((data) => {
        this.employees = [];

        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            this.employees.push({
              id: data.rows.item(i).id,
              firstname: data.rows.item(i).firstname,
              lastname: data.rows.item(i).lastname,
            })
          }
        }
      }, error => {
        console.log(error)
      });
  }

  doRemove(id: number) {
    this.showConfirm(id)
  }


  showConfirm(id: number) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'คุณต้องการลบรายการนี้?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            let sql = `DELETE FROM employee WHERE id=?`;
            this.db.executeSql(sql, [id])
              .then(() => {
                this.getList()
              }, error => {
                console.log(error)
              });
          }
        }
      ]
    });
    confirm.present();
  }

  

  edit(employee: Object) {
    this.navCtrl.push(EditEmployeePage, employee)
  }

  ionViewDidEnter() {
    this.getList()
  }

}
