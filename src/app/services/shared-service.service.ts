// shared.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class SharedService {
  username: string='Saket Tiwari';
  public loaderSubject = new Subject<any>();

  
  baseUrl: string = 'https://cors-anywhere.herokuapp.com/https://app.smartkeeda.com/'
  
  constructor(private http:HttpClient){

  }

  getFriendDetail(){
    const url=this.baseUrl+'demoapi/demo/main';
    return this.http.post(url,{});
  }

  getPostData(){
    const url=this.baseUrl+'demoapi/demo/PostData';
    return this.http.post(url,{});
  }

  getProfile(){
    const url=this.baseUrl+'/demoapi/demo/Getprofile?UserId=1';
    return this.http.post(url,{});
  }

  getConversation(){
    const url=this.baseUrl+'/demoapi/demo/GetConversation';
    return this.http.post(url,{});
  }

}
