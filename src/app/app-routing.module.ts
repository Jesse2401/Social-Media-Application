import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:MainPageComponent},
  {path:'chat',component:ChatPageComponent},
  {path:'profile',component:ProfilePageComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
