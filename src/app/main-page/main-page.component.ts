import { Component,OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  isLoading:any=false;
  friendList:any;
  userName:any;
  postList:any;

  posts: any[] = [];
  paginatedPosts: any[] = ['wdwdd','wwxwdx','wdwdwd','saket'];
  currentPage = 1;
  pageSize = 10;
  totalPosts = 0;

  constructor(public sharedService:SharedService){
  }

  ngOnInit(): void {

    this.getFriendDetails();
    this.getPostDetails();
  }

  getFriendDetails(){
this.sharedService.loaderSubject.next(true);

    this.sharedService.getFriendDetail().subscribe((response:any)=>{
      
      console.log(response,'frienddetails');
      if(response&&response.Status)
      {
        this.friendList=response.FriendList;
        this.userName=response.Name+"!";
      }
      this.sharedService.loaderSubject.next(false);

   })
   
  }


  getPostDetails(){

    this.sharedService.loaderSubject.next(true);

    this.sharedService.getPostData().subscribe((response:any)=>{
      console.log(response,'postdetails');
      if(response&&response.Status)
      {
        this.postList=response.PostList;
      }
      this.sharedService.loaderSubject.next(false);
    })
  }
  


  
}
