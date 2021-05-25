import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.page.html',
  styleUrls: ['./insert-user.page.scss'],
})
export class InsertUserPage{
  
insertform:FormGroup;
  constructor(public form: FormBuilder,private http: HttpClient,public mdlCtrl:ModalController) { 

    this.insertform = this.form.group({

      name:['',Validators.required],
      job:['',Validators.required]

    })

  }

  add(){

    // https://reqres.in/api/users
    console.log("clicked");

    this.http.post("https://reqres.in/api/users",{
      
        "name": this.insertform.value.name,
        "job": this.insertform.value.job
    
    }).subscribe(res=>{
      this.close();
      console.log(res);
      
    })

  }
  close(){
    this.mdlCtrl.dismiss();
  }

}
