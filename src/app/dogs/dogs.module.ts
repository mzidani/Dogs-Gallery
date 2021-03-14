import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsDashboardComponent } from './containers/dogs-dashboard/dogs-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { DogsDetailComponent } from './containers/dogs-detail/dogs-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [DogsDashboardComponent, DogsListComponent, DogsDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [DogsDashboardComponent]
})
export class DogsModule {}