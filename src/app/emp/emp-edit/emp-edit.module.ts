import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpEditRoutingModule } from './emp-edit-routing.module';
import { EmpEditComponent } from './emp-edit.component';


@NgModule({
  declarations: [EmpEditComponent],
  imports: [
    CommonModule,
    EmpEditRoutingModule
  ]
})
export class EmpEditModule { }
