import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleComponent } from './sale.component';

const routes: Routes = [
  {
    path: '',
    component: SaleComponent,
    data: {
      title: 'Sale'
    },
    children: [
      {
        path: 'sale',
        component: SaleComponent,
        data: {
          title: 'Sale'
        }
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
