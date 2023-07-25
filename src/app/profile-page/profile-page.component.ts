import { Component,OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
import { response } from 'express';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  photosList:any;
  userDescription:any;
  followerCount:any;
  followingCount:any;
  userName:any;
  photosCount:any;
  constructor(public sharedService:SharedService){
  }

  ngOnInit(): void {
    
    this.getUserProfile();
  }

  getUserProfile(){

    this.sharedService.getProfile().subscribe((response:any)=>{

      console.log(response);
    if(response&&response.Status)
    {
         this.photosList= response.PhotoList;
         this.userDescription=response.Description;
         this.followerCount=response.FollowersCount;
         this.followingCount=response.FollowsCount;
         this.userName=response.Name;
         this.photosCount=response.PhotosCount;
    }
    })
    
  }


}
