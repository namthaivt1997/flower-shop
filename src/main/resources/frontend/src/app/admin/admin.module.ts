import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
