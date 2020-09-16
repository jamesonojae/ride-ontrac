import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
// import {AboutComponent} from '../components/about/about.component';
// import {OurservicesComponent} from '../components/ourservices/ourservices.component';
// import {ContactComponent} from '../components/contact/contact.component';
// import {TeamComponent} from '../components/team/team.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'about', component: AboutComponent},
  // {path: 'services', component: OurservicesComponent},
  // {path: 'contact', component: ContactComponent},
  // {path: 'team', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
