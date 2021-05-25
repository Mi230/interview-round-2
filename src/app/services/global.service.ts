import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private username = new Subject<any>();

  publisData(data:any){
    this.username.next(data);
  }
  getData(): Subject<any>{
    return this.username;

  }
}
