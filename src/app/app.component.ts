import { Component } from '@angular/core';
import { SharedService } from './services/shared-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'social-media-app';
  isLoading:any=false;
  constructor(private sharedService:SharedService){
       this.sharedService.loaderSubject.subscribe((value) => {
       setTimeout(() => {
        this.isLoading=value;
       }, 100);
});



  }
}
