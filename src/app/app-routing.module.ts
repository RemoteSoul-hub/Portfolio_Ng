import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'all-projects', component: AllProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
