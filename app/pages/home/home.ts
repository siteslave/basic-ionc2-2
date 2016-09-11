import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
  
export class HomePage {

  mainDepartments: any[]
  subDepartments: any[]
  allSubDepartments: any[]

  mainDep: number
  subDep: number

  constructor(private navCtrl: NavController) {
    
    this.mainDepartments = [
      { id: 1, name: 'การพยาบาล' },
      { id: 2, name: 'ฝ่ายส่งเสริม' },
      { id: 3, name: 'ศูนย์ประกัน' }
    ]
    
    this.allSubDepartments = [
      { id: 1, mainDep: 1, name: 'แผนก ER' },
      { id: 2, mainDep: 2, name: 'ฝากครรภ์' },
      { id: 3, mainDep: 2, name: 'ฉีดวัคซีน' },
      { id: 4, mainDep: 3, name: 'ศูนย์คอมพิวเตอร์' }
    ]

  }

  getSubDepartments() {
    // alert(this.mainDep)
    this.subDepartments = []

    this.allSubDepartments.forEach(v => {
      if (v.mainDep == this.mainDep) this.subDepartments.push(v)
    })

  }

}
