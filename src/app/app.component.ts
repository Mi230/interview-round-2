import { GlobalService } from './services/global.service';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  username:any;

  constructor(public navCtrl:NavController,public glb:GlobalService) {

    this.getData();

    if(localStorage.getItem('username')){

      this.username = localStorage.getItem('username');

    }else{

      this.username = "";

    }


  }
  getData(){

    this.glb.getData().subscribe((res)=>{
      this.username = res;
      console.log(res);

    })
  }
  logout(){

    localStorage.removeItem('username');

    this.navCtrl.navigateRoot('login');

  }
}
