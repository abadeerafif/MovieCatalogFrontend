import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageContentComponent },
  { path: '', component: LoginpageComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
