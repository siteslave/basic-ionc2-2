import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Employee, Person} from '../../employee'
import {Customer} from '../../customer'

@Component({
  templateUrl: 'build/pages/home/home.html'
})
  
export class HomePage {
  person: Person
  customer: Customer

  constructor(private navCtrl: NavController) {
    this.person = { fristName: 'Satit', lastName: 'Rianpit' }
    let employee = new Employee(this.person)

    let fullname = employee.getFullname();
    alert(fullname)

    this.customer = {
      code: '0001',
      firstName: 'Bill',
      lastName: 'Gate',
      email: 'bill@ms.com',
      telephone: '1234567890'
    }

    alert(JSON.stringify(this.customer))

  }

}
