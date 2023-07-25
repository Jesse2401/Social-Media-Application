import { Component,OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
// import { Mainapi } from '../Model/main_api.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  
  // username:string
  profileImages :string[]=['ece.jpg','wwd.jpg','wdwd.jpg','dwdwd.jpg','dwdd.jpg'];

  friendList:any;
  userName:any;
  postList:any;

  //posts
  posts: any[] = [];
  paginatedPosts: any[] = ['wdwdd','wwxwdx','wdwdwd','saket'];
  currentPage = 1;
  pageSize = 10;
  totalPosts = 0;

  constructor(public sharedService:SharedService){

    // this.sharedService.username="Saket!";
  }

  ngOnInit(): void {

    this.getFriendDetails();
    this.getPostDetails();
  }

  getFriendDetails(){

    this.sharedService.getFriendDetail().subscribe((response:any)=>{
      
      console.log(response,'frienddetails');
      if(response&&response.Status)
      {
        this.friendList=response.FriendList;
        this.userName=response.Name;
      }
   })
  }


  getPostDetails(){

    this.sharedService.getPostData().subscribe((response:any)=>{
      console.log(response,'postdetails');
      if(response&&response.Status)
      {
        this.postList=response.PostList;
      }
    })
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedPosts = this.posts.slice(startIndex, startIndex + this.pageSize);
  }
  


  
}
