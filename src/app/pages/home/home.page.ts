import { InsertUserPage } from './../../model/insert-user/insert-user.page';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  users:any;
  data: any;

  constructor(private http: HttpClient,public glb:GlobalService,public mdlCtrl:ModalController,public tstCtrl: ToastController,) { 

    this.get_data_from_api(2);
  }

  get_data_from_api(id){

    this.http.get("https://reqres.in/api/users?page="+id).subscribe(res=>{

      this.data = res['data'];
      console.log(this.data);
    })
    

  }
  deleteItem(id){

    // https://reqres.in/api/users/5

    this.http.delete("https://reqres.in/api/users/"+id).subscribe(res=>{
      this.pressent_toast('Data delete successfully');
      this.get_data_from_api(1);
      
    console.log(res);

    })

  }
  async addUser(){

    const modal = await this.mdlCtrl.create({
      component: InsertUserPage,
      
    });

    modal.onDidDismiss().then(() => {
     this.get_data_from_api(1);
      
    });

    return await modal.present();

  }
  async pressent_toast(msg) {

    const toast = await this.tstCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }


}
