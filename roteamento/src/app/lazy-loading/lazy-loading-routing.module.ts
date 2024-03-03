import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';

const routes: Routes =[
  {
    path:'', component: LazyLoadingComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LazyLoadingRoutingModule { }
