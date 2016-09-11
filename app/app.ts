import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar, SQLite} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      let db = new SQLite();
      db.openDatabase({
        name: 'employee.db',
        location: 'default'
      })
        .then(() => {
          // success
          let sql = `create table if not exists employee 
          (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)
          `;

          db.executeSql(sql, [])
            .then(() => {
              console.log('success')
            }, error => {
              console.log(error)
            });

        }, error => {
          console.log(error)
        });

    });
  }
}

ionicBootstrap(MyApp);
