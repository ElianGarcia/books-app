import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    RegisterComponent,
    DashboardComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ]
})
export class BooksModule { }
