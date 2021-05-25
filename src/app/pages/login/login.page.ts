import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  temp: any;
  username: any;
  loginform: FormGroup;

  constructor(public navCtrl: NavController, public form: FormBuilder, public tstCtrl: ToastController, public glb: GlobalService, public menuctr: MenuController) {


    this.loginform = this.form.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]

    })


  }

  ionViewDidEnter() {
    this.menuctr.enable(false);
  }

  gotohome() {

    if (this.loginform.valid) {

      if (this.loginform.value.password == "Admin@123") {

        this.temp = this.loginform.value.email;

        this.username = "";

        for (let i = 0; i < this.temp.length; i++) {

          if (this.temp[i] == '@') {

            break;
            

          } else {

            this.username = this.username + this.temp[i];

          }

        }

        console.log(this.username);

        this.glb.publisData(this.username);
        this.pressent_toast("Login Successful");
        this.menuctr.enable(true);

        this.navCtrl.navigateRoot("home");

      } else {
        this.pressent_toast("password is not match");
      }




    } else {

    }

  }



  async pressent_toast(msg) {

    const toast = await this.tstCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }

}
