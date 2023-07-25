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
  // searchControl: FormControl = new FormControl('');
  filteredFriendsChat:any;

  constructor(public sharedservice:SharedService){
    // this.searchControl.valueChanges.subscribe((searchTerm) => {
    //   this.applyFilter(searchTerm);
    // });
    this.filteredFriendsChat = this.friendsChat;

  }

  ngOnInit(): void {
     
    this.getFriendsConversation();
    
  }

  getFriendsConversation()
  {
    this.sharedservice.getConversation().subscribe((response:any)=>{
      console.log(response);

      if(response&&response.Status)
      {
          this.friendsChat=response.FriendList;

      }

    })
  }

  onSearch(searchValue: string): void {
    // Filter the profile boxes based on the search input
    // this.filteredFriendsChat = this.friendsChat.filter((item: this.friendsChat) =>
    //   item.Name.toLowerCase().includes(searchValue.toLowerCase())
    // );
  }
}

