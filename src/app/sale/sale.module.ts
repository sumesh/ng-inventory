import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { SaleComponent } from './sale.component';
// Components Routing
import { SaleRoutingModule } from './sale-routing.module';

@NgModule({
  imports: [
    SaleRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    SaleComponent
  ]
})
export class SaleModule { }
