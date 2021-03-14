import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DogsDashboardComponent} from './dogs/containers/dogs-dashboard/dogs-dashboard.component';
import {DogsDetailComponent} from './dogs/containers/dogs-detail/dogs-detail.component';

const routes: Routes = [
  {path: 'dashboard', component: DogsDashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: DogsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
