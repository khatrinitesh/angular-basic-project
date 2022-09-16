import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpListRoutingModule } from './emp-list-routing.module';
import { EmpListComponent } from './emp-list.component';


@NgModule({
  declarations: [EmpListComponent],
  imports: [
    CommonModule,
    EmpListRoutingModule
  ]
})
export class EmpListModule { }
