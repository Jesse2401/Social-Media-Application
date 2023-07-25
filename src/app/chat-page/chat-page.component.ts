import { Component,OnInit } from '@angular/core';
import { SharedService } from '../services/shared-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  friendsChat:any;
  filteredFriendsChat :any;
  searchText: string = ''; 

  constructor(public sharedservice:SharedService){
    
    this.filteredFriendsChat = this.friendsChat;

  }

  ngOnInit(): void {
     
    this.getFriendsConversation();
    
  }

  getFriendsConversation()
  {
    this.sharedservice.loaderSubject.next(true);
    this.sharedservice.getConversation().subscribe((response:any)=>{
      console.log(response);

      if(response&&response.Status)
      {
          this.friendsChat=response.FriendList;
          this.filteredFriendsChat=this.friendsChat;

      }
      this.sharedservice.loaderSubject.next(false);

    })
  }

  filterProfiles(searchText: any): void {
    this.searchText = searchText.target.value; 

    if (!searchText) {
      this.friendsChat = [...this.filteredFriendsChat];
      return;
    }

    this.friendsChat = this.filteredFriendsChat.filter((profile:any) =>
      profile.Name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

