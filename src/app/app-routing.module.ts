import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './myComponents/about/about.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import { HomeComponent } from './myComponents/home/home.component';
import { WorkComponent } from './myComponents/work/work.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'work',component:WorkComponent},
  {path:'contact',component:ContactComponent},
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
